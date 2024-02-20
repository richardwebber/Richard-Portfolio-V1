import "./contact.scss";
import {motion} from 'framer-motion'

const Contact = () => {
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

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div >
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Salt Lake City, Utah</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>801-999-9999</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
