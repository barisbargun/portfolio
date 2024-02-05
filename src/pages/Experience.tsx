import { motion } from "framer-motion"
import { experiences, pageTexts } from "src/constants/index"
import { textVariant } from "src/lib/motion"
// @ts-ignore
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { ExperienceCard } from "src/components";

const Experience = () => {
  return (
    <section>
      <motion.div variants={textVariant()} className="mb-10">
        <p className="head-intro">{pageTexts.experience.intro}</p>
        <h1 className="f64-extrabold">{pageTexts.experience.head}</h1>
      </motion.div>

      <VerticalTimeline className = "sm:!w-[95%]">
        {experiences.map(v => (
          <ExperienceCard key={v.company_name} experience={v} />
        ))}
      </VerticalTimeline>
      </section>
  )
}

export default Experience