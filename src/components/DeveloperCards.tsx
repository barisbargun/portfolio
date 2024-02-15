import { motion } from "framer-motion";
import { services } from "../constants"
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../lib/motion";
import { useInView } from "react-intersection-observer";

const DeveloperBoxes = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className='w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:mx-auto max-sm:gap-20 lg:w-full lg:flex-between lg:px-4 max-lg:gap-6 mt-16' ref={ref}>
      {
        services.map((v, index) => (

          <Tilt key={v.name} className="w-fit min-h-[180px] max-sm:min-h-[220px]">

            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            >
              {inView &&

                <div className="max-sm:scale-125 shadow-card w-full green-pink-gradient rounded-[20px] bg-gradient-to-b from-purple to-skinColor p-[1.5px]">
                  <div
                    className="w-[178px] h-[193px] rounded-2xl flex-center flex-col gap-4  bg-secondColor"
                  >
                    <img loading="lazy" src={v.icon} alt={`${v.name} icon`} width={55} height={55} />
                    <h2 className="w-[130px] text-center f14-bold">{v.name}</h2>
                  </div>
                </div>
              }

            </motion.div>
          </Tilt>

        ))
      }
    </div>
  )
}

export default DeveloperBoxes