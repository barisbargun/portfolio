import { credits, pageTexts } from '@/constants'
import { textVariant } from '@/lib/motion'
import { motion } from 'framer-motion'

const Credit = () => {
  return (
    <section>
      <motion.div variants={textVariant()} className='mb-2'>
        <p className='head-intro '>{pageTexts.credit.intro}</p>
        <h2 className='f64-extrabold mb-4'>{pageTexts.credit.head}</h2>
      </motion.div>

      <div className='flex flex-col gap-3'>
        {
          credits.map((v,ind) => (
            <p key={ind} className='f10-light opacity-85 break-words'>{v}</p>
          ))
        }
      </div>
    </section>
  )
}

export default Credit