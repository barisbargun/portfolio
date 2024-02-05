import { useForm } from "react-hook-form"
import { contactSchema } from "src/lib/validation"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { toastActions } from "@/lib/toastActions";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const ContactForm = () => {

  const { toast } = useToast();
  const recaptchaRef = useRef<any>();
  const [sending, setSending] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  })

  async function onSubmit(val: z.infer<typeof contactSchema>) {
    const recaptchaValue = recaptchaRef?.current?.getValue();
    if (recaptchaValue && !sending) {
      setSending(true);
      const mail: IEmail & Record<string, unknown> = {
        from_name: val.name,
        to_name: "Barış",
        from_email: val.email,
        to_email: "ben_8_10@hotmail.com",
        message: val.message
      }

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mail,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        toast(toastActions.send)
        form.reset()
      }).catch(() => {
        toast(toastActions.sendFailed);
      }).finally(() => { setSending(false) })
      recaptchaRef?.current?.reset();

    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className="f15-medium">Name</FormLabel>
            <FormControl>
              <Input autoComplete="name" {...field} placeholder="Enter your name." className="!bg-thirdColor !ring-0 f13-medium" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel className="f15-medium">Email</FormLabel>
            <FormControl>
              <Input autoComplete="email" {...field} placeholder="Enter your email." className="!bg-thirdColor !ring-0 f13-medium" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="f15-medium">Message</FormLabel>
            <FormControl>
              <Textarea autoComplete="no" {...field} className="resize-none !bg-thirdColor !ring-0 f13-medium" rows={8} placeholder="Enter your message." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
          ref={recaptchaRef}
          className="w-full max-sm:flex-center"
        />
        <input
          aria-label="submit-form"
          disabled={sending}
          type="submit"
          className="bg-thirdColor 
        hover:bg-[#0e101f] 
        transition-all 
        px-4 py-2 w-fit cursor-pointer rounded-md f15-medium
        "
          value={`${sending ? "Sending.." : "Send"}`} />

      </form>
    </Form>
  )
}

export default ContactForm