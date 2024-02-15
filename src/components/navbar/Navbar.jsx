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
          {/* Richard Webber */}
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/richard-webber-b1a052276/">
            <motion.img
              src="/bw-linkedIn-icon.png"
              alt=""
              className="linkedIn-logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </a>
          <a href="https://github.com/richardwebber">
            <motion.img
              src="/github-logo.png"
              alt=""
              className="github-logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
