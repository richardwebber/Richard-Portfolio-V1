import "./parallax.scss"

const Parallax = () => {
  return (
    <div className="parallax" style={{background: "linear-gradient(180deg,  #000000, #3939ac, #cc99ff, #f2ccff"}}>
      <h1>'[projects]'</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  )
}

export default Parallax