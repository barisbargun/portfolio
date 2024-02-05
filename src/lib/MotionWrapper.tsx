import { staggerContainer } from './motion'
import { motion } from "framer-motion";

const MotionWrapper = (Component: any, idName: string) => {

  const topAmount = idName == "contact" ? "top-[215px]" : "top-[-100px]";
  return (
    <motion.section
      // @ts-ignore
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative mt-[100px]'
    >
      <span className={`absolute ${topAmount} lg:top-[-100px]`} id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
}

export default MotionWrapper