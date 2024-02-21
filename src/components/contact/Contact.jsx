import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="textContainer" variants={variants}>
        <h1 variants={variants}>Lets work together</h1>
        <div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Salt Lake City, Utah</span>
        </div>
        <div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>801-999-9999</span>
        </div>
      </div>
      <div className="formContainer">
        <form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

