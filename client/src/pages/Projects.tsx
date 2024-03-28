import { motion } from "framer-motion"
import ProjectCards from "@/components/ProjectCards"
import { pageTexts } from "@/constants"
import { textVariant, fadeIn } from "@/lib/motion"

const Projects = () => {

  return (
    <section className="w-full">
      <motion.div variants={textVariant()} viewport={{once:true}} className='mb-2'>
        <p className='head-intro'>{pageTexts.projects.intro}</p>
        <h2 className='f64-extrabold mb-4'>{pageTexts.projects.head}</h2>
      </motion.div>

      <motion.p className='head-desc max-w-[600px]' variants={fadeIn("", "", 0.3, 1)}>
        {pageTexts.projects.desc}
      </motion.p>

      <div className="w-full flex justify-center">
        <ProjectCards />

      </div>
    </section>
  )
}

export default Projects