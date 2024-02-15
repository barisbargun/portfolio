import { motion } from "framer-motion"
import { fadeIn } from "src/lib/motion"
import Tilt from "react-parallax-tilt";
import { projects } from "src/constants";

const colors = ["text-[#349F2A]", "text-[#1F57C3]", "text-[#9C2B2B]"];
const ProjectCards = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 max-md:justify-center mt-8">
      {projects.map((v, index) => (
        <motion.div key={v.name} variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
        className="w-[95%] md:w-[48%] md:max-w-[320px]">
          <Tilt className="flex flex-col bg-secondColor rounded-md p-3 gap-3 h-full w-full shadow-card">
              <div className="relative ">

                <img src={v.image} alt={`${v.name} icon`} loading="lazy" className="w-full rounded-md object-crop aspect-video" />

                <a href={v.source_code_link} target="_blank" rel="noopener noreferrer" className="absolute right-1 top-1">
                  <img
                    src="/assets/github.svg"
                    alt="source code icon"
                    loading="lazy"
                    title="Github repository"
                    className="w-6 h-6 object-contain bg-black rounded-md p-[3px] box-content"
                  />
                </a>

              </div>


              <a href={v.project_link} target="_blank" rel="noopener noreferrer" className="f15-bold mt-2 w-fit ">{v.name}</a>
              <p className="f12-regular flex-1">{v.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {v.tags.map((t, ind) => (
                  <p key={ind} className={`f12-regular leading-4 ${colors[ind % 3]}`}>#{t}</p>
                ))}
              </div>
          </Tilt>
        </motion.div>
      ))}
    </div>

  )
}

export default ProjectCards