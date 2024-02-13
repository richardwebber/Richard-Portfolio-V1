import { motion } from 'framer-motion'

export const Test = () => {

    const variants = {
        visible: {opacitity: 1},
        hidden: {opacity: 0}
    }
  return (
    <div className="course">
        <motion.div 
        className="box" 
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 0.5, scale: 1, x: 200, y: -300}} 
        transition={{duration:2}}
        whileInView={{opacity: 1, scale: 2}}
        drag
        ></motion.div>
    </div>
  )
}
