import { motion } from "framer-motion";
import { pageTexts } from "@/constants";
import { HeroButtons } from "@/components";

const content = pageTexts.main.head.split(" ");
const Hero = () => {
  return (
    <div
      className="flex min-h-screen justify-center overflow-hidden relative items-center w-full"
      id="main"
    >
      <div className="bg-hero bg-cover bg-no-repeat bg-bottom absolute top-0 left-0 min-h-screen w-full opacity-60 ">

      </div>
      <div className="absolute top-0 left-0 min-h-screen w-full bg-gradient-to-br from-blue-950 from-60% to-blue-200 opacity-20">
        
      </div>

      <div className="pageWidth relative items-center justify-start mt-[-5rem]">
        <div className="z-10 mt-10 flex w-fit flex-1 flex-col items-start">
          <h1 className="title">
            <span className="drop-shadow-whiteGlow">
              {content.slice(0, 2).join(" ")}
            </span>
            <span className="drop-shadow-indigoGlow mt-1 block text-indigo-600">
              {content.slice(2).join(" ")}
            </span>
          </h1>
          <HeroButtons />
        </div>
      </div>

      <div className="flex-center absolute bottom-8 z-10">
        <a href="#about" rel="button" aria-label="About">
          <div className="border-4 flex h-[40px] w-[25px] justify-center rounded-full border-white pt-[3px]">
            <motion.div
              animate={{
                y: [0, 13, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-white"
            />
          </div>
          <span className="sr-only">About</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
