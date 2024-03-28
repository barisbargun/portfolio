import { motion } from "framer-motion"
import { experiences, pageTexts } from "@/constants/index"
import { textVariant } from "@/lib/motion"
// @ts-ignore
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { ExperienceCard } from "@/components";

const Experience = () => {
  return (
    <section className="w-full">
      <motion.div variants={textVariant()} className="mb-10">
        <p className="head-intro">{pageTexts.experience.intro}</p>
        <h2 className="f64-extrabold">{pageTexts.experience.head}</h2>
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