import { motion } from 'framer-motion'
import { fadeIn, textVariant } from 'src/lib/motion'
import { pageTexts } from 'src/constants'
import { DeveloperCards } from 'src/components'

const About = () => {
  return (
    <section className='flex flex-col'>
      
      <motion.div variants={textVariant()} className='mb-2'>
        <p className='head-intro '>{pageTexts.about.intro}</p>
        <h1 className='f64-extrabold mb-4'>{pageTexts.about.head}</h1>
      </motion.div>

      <motion.p className='head-desc max-w-[600px]' variants={fadeIn("", "", 0.3, 1)}>
        {pageTexts.about.desc}
      </motion.p>


      <DeveloperCards />

      <div className='mt-20 flex justify-center w-full'>
        <p className='relative f14-bold opacity-85 w-[80%] text-center customQuote'>
          
          A web developer, weaving the digital fabric, sculpts user experiences and shapes the digital future with innovative solutions that transcend the boundaries of the web.
        </p>
      </div>

    </section>
  )
}

export default About