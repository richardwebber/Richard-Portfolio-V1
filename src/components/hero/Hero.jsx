import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Richard Webber</motion.h1>
          <motion.h2 variants={textVariants}>Software Engineer</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            className="arrow-icon"
            src="/arrow.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img className="headshot-img" src="/Riz_Ahmed.png" alt="" />
      </div>
    </div>
  );
};