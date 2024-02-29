import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Where To?",
    img: "https://ka-perseus-images.s3.amazonaws.com/1a35297f8e56e9a82b6f90cbd22d37e7b34fd2f2.jpg",
    desc: "Where To is a CRUD ecomerce application built using the PERN stack. I used React JS, Material UI (component library), Zustand (gloabl state management), ",
  },
  {
    id: 2,
    title: "RAW.house Collective",
    img: "https://wallpapercave.com/wp/wp11678597.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
  },
  {
    id: 3,
    title: "Customer Admin APP",
    img: "https://w0.peakpx.com/wallpaper/207/486/HD-wallpaper-laguna-beach-usa-california-dawn-night-lights-scenery-relaxing-mood-nature.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>DEMO</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
