import { motion } from "framer-motion";
import { ContactForm, EarthCanvas } from "@/components";
import { pageTexts } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import { Suspense } from "react";
import CanvasLoader from "@/components/CanvasLoader";

const Contact = () => {
  return (
    <section className="flex w-full items-center justify-between gap-12 max-lg:flex-col-reverse">
      <div className="w-full rounded-lg bg-secondColor p-6 lg:w-[50%]">
        <motion.div variants={textVariant()} className="mb-2">
          <p className="head-intro ">{pageTexts.contact.intro}</p>
          <h2 className="f64-extrabold mb-8">{pageTexts.contact.head}</h2>
        </motion.div>
        <ContactForm />
      </div>

      <motion.div
        variants={fadeIn("left", "Inertia", 0.2, 1)}
        className="h-[260px] w-fit min-w-[350px] sm:h-[350px] xl:h-[400px] xl:min-w-[400px] 2xl:h-[500px] 2xl:min-w-[500px]"
      >
        <Suspense fallback={<CanvasLoader />}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </section>
  );
};

export default Contact;
