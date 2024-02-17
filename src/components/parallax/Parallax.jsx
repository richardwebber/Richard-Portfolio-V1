import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "300%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const logoBg = useTransform(scrollYProgress, [0,1], ["0%", "-150%"])
  const yBg2 = useTransform(scrollYProgress, [0,1], ["0%", "70%"])


  return (
    <div className="parallax" ref={ref} style={{background: "linear-gradient(180deg,  #000000, #4C4C4C, #A3A3A3, #F4F4F4"}}>
      <motion.h1 style={{y:yText}}>'[projects]'</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:logoBg}} className="react-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="js-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="ts-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="html-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="css-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="nodejs-logo" ></motion.div>
      <motion.div style={{y:logoBg}} className="postgresql-logo" ></motion.div>
      <motion.div style={{y:yBg2}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax