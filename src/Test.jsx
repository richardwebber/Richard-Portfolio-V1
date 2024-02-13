import { motion } from 'framer-motion'
import { useState } from 'react'

export const Test = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        visible: {opacity: 1, x: 800, transition: {type: 'spring', stiffness: 30, damping: 100}},
        hidden: {opacity: 0}
    }
  return (
    <div className="course">
        <motion.div 
        className="box" 
        variants={variants}
        // initial='hidden'
        // animate='visible'
        animate={open ? 'visible' : 'hidden'}
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
    </div>
  )
}
