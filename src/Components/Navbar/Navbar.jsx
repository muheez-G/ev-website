import  './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
         <li>Home</li>
         <li>Explore</li>
         <li>About</li>
         <li className='nav-contact' id='nav-c'><a href='mailto:ashogbonmuheez@gmail.com'>Contact-Dev</a></li>
      </ul>
    </div>
  )
}

export default Navbar