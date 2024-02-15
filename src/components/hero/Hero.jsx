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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
        duration: 2.2,
        repeat: Infinity,
    }
  }
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
          <motion.h1 variants={textVariants}>RICHARD WEBBER</motion.h1>
          <motion.h2 variants={textVariants}>SOFTWARE ENGINEER</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} className="latest-work">Latest Work</motion.button>
            <motion.button variants={textVariants} className="contact-me">Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
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
