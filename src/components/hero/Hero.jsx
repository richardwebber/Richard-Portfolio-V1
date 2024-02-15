import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h1>Richard Webber</h1>
          <h2>Software Engineer</h2>
          <div className="buttons">
            <button>See Latest Work</button>
            <button>Contact Me</button>
          </div>
          <img className="arrow-icon" src="/arrow.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img className="headshot-img" src="/Riz_Ahmed.png" alt="" />
      </div>
    </div>
  );
};
