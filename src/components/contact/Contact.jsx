import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Lets work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Salt Lake City, Utah</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>801-999-9999</span>
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Name"/>
                <input type="email" required placeholder="Email"/>
                <textarea rows={8} placeholder="" />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact