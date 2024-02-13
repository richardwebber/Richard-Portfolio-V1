import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
            <span>Richard Webber</span>
            <div className='social'>
                <a href="https://www.linkedin.com/in/richard-webber-b1a052276/"><img src="/linkedIn-icon.png" alt="" /></a>
                <a href="#"><img src="/facebook-logo.png" alt="" /></a>
                <a href="#"><img src="/instagram-icon.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar