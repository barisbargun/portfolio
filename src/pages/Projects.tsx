import { motion } from "framer-motion"
import ProjectCards from "src/components/ProjectCards"
import { pageTexts } from "src/constants"
import { textVariant, fadeIn } from "src/lib/motion"

const Projects = () => {
  return (
    <section>
      <motion.div variants={textVariant()} className='mb-2'>
        <p className='head-intro'>{pageTexts.projects.intro}</p>
        <h1 className='f64-extrabold mb-4'>{pageTexts.projects.head}</h1>
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