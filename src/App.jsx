import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact.jsx"
import { Hero } from "./components/hero/Hero";
import { Portfolio } from "./components/portfolio/Portfolio.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import { Cursor } from "./components/cursor/Cursor.jsx";
// import { Test } from './Test'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      {/* <Portfolio /> */}
      {/* <section id="Contact">
        <Contact />
      </section> */}
      {/* <Test/> */}
    </div>
  );
};

export default App;
