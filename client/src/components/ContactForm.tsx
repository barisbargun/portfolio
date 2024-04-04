import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useToast,
  Textarea,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { toastActions } from "@/lib/toastActions";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { sendMessage } from "@/lib/actions";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 300px 0px",
    triggerOnce: true
  });

  const { toast } = useToast();
  const recaptchaRef = useRef<any>();
  const [sending, setSending] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(val: z.infer<typeof contactSchema>) {
    const recaptchaValue = recaptchaRef?.current?.getValue();

    if (!recaptchaValue && !sending) {
      setSending(true);

      sendMessage({
        name: val.name,
        email: val.email,
        message: val.message,
        recaptcha: recaptchaValue,
      })
        .then((v) => {
          if (v.status == 200) return toast(toastActions.send);
          throw Error();
        })
        .catch(() => {
          toast(toastActions.sendFailed);
        })
        .finally(() => {
          setSending(false);
          // form.reset();
          recaptchaRef?.current?.reset();
        });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-col gap-5"
        ref={ref}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="f15-medium">Name</FormLabel>
              <FormControl>
                <Input
                  autoComplete="name"
                  {...field}
                  placeholder="Enter your name."
                  className="f13-medium !border-0 !bg-thirdColor !ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="f15-medium">Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  {...field}
                  placeholder="Enter your email."
                  className="f13-medium !border-0 !bg-thirdColor !ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="f15-medium">Message</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="no"
                  {...field}
                  className="f13-medium resize-none !border-0 !bg-thirdColor !ring-0"
                  rows={8}
                  placeholder="Enter your message."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {inView && (
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
            ref={recaptchaRef}
            className="max-sm:flex-center w-full"
          />
        )}

        <input
          aria-label="submit-form"
          disabled={sending}
          type="submit"
          className="f15-medium 
        w-fit 
        cursor-pointer 
        rounded-md bg-thirdColor px-4 py-2 transition-all hover:bg-[#0e101f]
        "
          value={`${sending ? "Sending.." : "Send"}`}
        />
      </form>
    </Form>
  );
};

export default ContactForm;
