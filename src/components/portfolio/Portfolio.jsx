import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Where To?",
    img: "https://ka-perseus-images.s3.amazonaws.com/1a35297f8e56e9a82b6f90cbd22d37e7b34fd2f2.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
  },
  {
    id: 2,
    title: "RAW.house Collective",
    img: "https://wallpapercave.com/wp/wp11678597.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
  },
  {
    id: 3,
    title: "Discord Clone",
    img: "https://w0.peakpx.com/wallpaper/207/486/HD-wallpaper-laguna-beach-usa-california-dawn-night-lights-scenery-relaxing-mood-nature.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
