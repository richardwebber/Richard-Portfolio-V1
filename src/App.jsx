import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax.jsx";
// import { Test } from './Test'

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
