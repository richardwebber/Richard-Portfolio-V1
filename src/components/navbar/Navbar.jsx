import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Richard Webber
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/richard-webber-b1a052276/">
            <img src="/bw-linkedIn-icon.png" alt="" />
          </a>
          <a href="https://github.com/richardwebber">
            <img src="/github-logo.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
