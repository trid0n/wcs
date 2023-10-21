import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

function Nav() {

  return (
    <div>
        <ol className='NavHeadings'>
          <li id='/Home' className='Title'><Link to="/Home">Warragul Counselling Services</Link></li>
          <li className ='item'><Link to="/Home" smooth={true}  duration={320} >Home</Link></li>
          <li className ='item'><Link to="/About" smooth={true}  duration={320} >About</Link></li>
          <li className ='item'><Link to="/Specialties" smooth={true} offset={50} duration={320} >Specialties</Link></li>
          <li className ='item'><Link to="/FAQ" smooth={true}  duration={320} >FAQ</Link></li>
          <li className ='item'><Link to="/Fees" smooth={true}  duration={320} >Fees</Link></li>
        </ol>
    </div>
  );
}

export default Nav;