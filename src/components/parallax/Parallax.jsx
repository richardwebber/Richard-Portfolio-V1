import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? `linear-gradient(180deg, #000000, #a3a3c2)`
            : `linear-gradient(180deg, #99b3e6, #ebf0fa)`,
      }}
    >
      <motion.h1 style={{y:yText}}>
        {type === "services" ? "[skills]" : "[projects]"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:yBg}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
};
