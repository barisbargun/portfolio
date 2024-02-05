import { credits, pageTexts } from '@/constants'
import { textVariant } from '@/lib/motion'
import { motion } from 'framer-motion'

const Credit = () => {
  return (
    <section>
      <motion.div variants={textVariant()} className='mb-2'>
        <p className='head-intro '>{pageTexts.credit.intro}</p>
        <h1 className='f64-extrabold mb-4'>{pageTexts.credit.head}</h1>
      </motion.div>

      <div className='flex flex-col gap-3'>
        {
          credits.map(v => (
            <p className='f10-light opacity-85 break-words'>{v}</p>
          ))
        }
      </div>
    </section>
  )
}

export default Credit