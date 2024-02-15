import { motion } from "framer-motion"
import { ComputerCanvas } from "@/components"


const Hero = () => {
  
  return (

    <main  className="mt-[100px] flex flex-col w-full items-center relative">
      <>
        <div className="pageWidth h-screen w-[80%] relative">
          <div className="flex w-fit z-10 absolute">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-purple rounded-full" />
              <div className="w-1 h-[240px] bg-gradient-to-b from-purple  mt-[-15px]" />
            </div>
            <div className="flex flex-col ml-10 mt-8 max-sm:ml-5 gap-2">
              <h1 className="f64-extrabold">Hi, I'm <span className="text-purple ">Baris</span></h1>
              <h2 className="f20-medium max-w-[400px]">Crafting captivating and innovative web applications is my forte.</h2>
            </div>
          </div>

          <div className="h-[400px] lg:h-[550px] w-full flex-center mt-16 lg:mt-16">
              <ComputerCanvas />
          </div>

        </div>
        <div className="absolute bottom-8 z-10 w-full flex-center">
          <a href="#about" rel="button" aria-label="About">
            <div className=" w-[25px] h-[40px] border-4 border-white rounded-full flex justify-center pt-[3px]">
              <motion.div
                animate={{
                  y: [0, 13, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
              />
            </div>
            <span className="sr-only">About</span>
          </a>

        </div>
      </>
    </main>

  )
}

export default Hero