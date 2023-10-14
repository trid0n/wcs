import React from 'react';
import './Nav.css'
 

function Nav() {
  return (
    <div>
        <ol className='NavHeadings'>
          <li className='Title'>Warragul Counselling Services</li>
          <li><a href="Home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Specialties">Specialties</a></li>
          <li><a href="FAQ">FAQ</a></li>
          <li><a href="Fees">Fees</a></li>
        </ol>
    </div>
  );
}

export default Nav;