import "./parallax.scss";

export const Parallax = ({ type }) => {

  return (
    <div
      className="parallax"
      style={{
        background:type==='services' ? `linear-gradient(180deg, #000000, #a3a3c2)` : `linear-gradient(180deg, #99b3e6, #ebf0fa)`
      }}
    >
      <h1>{type === "services" ? "What We Do?" : "What We Did?"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};
