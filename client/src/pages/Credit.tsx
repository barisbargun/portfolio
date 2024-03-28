import { credits, pageTexts } from '@/constants'
import { fadeIn, textVariant } from '@/lib/motion'
import { motion } from 'framer-motion'

const Credit = () => {
  return (
    <section className='w-full'>
      <motion.div variants={textVariant()} className='mb-2'>
        <p className='head-intro '>{pageTexts.credit.intro}</p>
        <h2 className='f64-extrabold mb-4'>{pageTexts.credit.head}</h2>
      </motion.div>

      <motion.div className='flex flex-col gap-3' variants={fadeIn("", "", 0.3, 1)}>
        {
          credits.map((v,ind) => (
            <p key={ind} className='f10-light opacity-85 break-words'>{v}</p>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Credit