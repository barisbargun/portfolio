import { motion } from "framer-motion"
import { ContactForm } from "src/components"
import EarthCanvas from "src/components/EarthCanvas"
import { pageTexts } from "src/constants"
import { fadeIn, textVariant } from "src/lib/motion"

const Contact = () => {
  

  return (
    <section className="flex justify-between items-center max-lg:flex-col-reverse  gap-12 w-full">

      <div className="bg-secondColor p-6 rounded-lg w-full">
        <motion.div variants={textVariant()} className='mb-2'>
          <p className='head-intro '>{pageTexts.contact.intro}</p>
          <h2 className='f64-extrabold mb-8'>{pageTexts.contact.head}</h2>
        </motion.div>
        <ContactForm />
      </div>

      <motion.div
        variants={fadeIn("left", "Inertia", 0.2, 1)}
        className='max-lg:h-[260px] h-[390px] min-w-[350px] w-fit'
      >
        <EarthCanvas />
      </motion.div>

    </section>
  )
}

export default Contact