import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Where To?",
    img: "WTEventsDT.png",
    desc: "Where To? is a CRUD social media application built using the PERN stack. I used React JS, Node.js, SASS/CSS, Bootstrap/Material UI (component libraries), Zustand (global state management), Google Maps API and Axios for the front end. For the back end I used PostgreSQL, Express (server & sessions) and Bcrypt (login encryption).",
    desc2: "Where to was created with the intention to provide a solution for the perpetual question of what to do in your free time. Whether you're seeking adventure, socializing with others, or exploring new hobbies, Where To? is your go-to companion. I believe in the power of community and shared experiences, and I've built a platform that reflects this philosophy. With Where To? you can create, share, post and like events with your friends. Think instagram but instead you are sharing events with your community. ",
  },
  {
    id: 2,
    title: "RAW.house Collective",
    img: "https://wallpapercave.com/wp/wp11678597.jpg",
    desc: "RAW.house Collective is an ecommerce CRUD application using the PERN stack. I used React JS, Node.js, SASS/CSS, React Bootstrap (component library), Redux (global state management) and Axios for the front end. On the back end I used PostgreSQL and Express (server & sessions).",
    desc2: "I created RAW.house Collective because I wanted to create a clothing website where the target audience was individuals who need tough, stylish clothing that compliments their hobby. The target  audience are individuals who enjoy drifting cars, skateboarding and the aesthetic/ energy that comes from those communities. ",
  },
  {
    id: 3,
    title: "Customer Admin APP",
    img: "https://w0.peakpx.com/wallpaper/207/486/HD-wallpaper-laguna-beach-usa-california-dawn-night-lights-scenery-relaxing-mood-nature.jpg",
    desc: "Where To is an app that brings people together by creating, likeing, saving and sharing events!",
    desc2: "Lorem ipsum",
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
            <p>{item.desc2}</p>
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
