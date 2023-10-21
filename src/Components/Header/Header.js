import React from 'react';
import Nav from './Nav/Nav'
import './Header.css'
import { Link } from 'react-scroll'

function Header () {
    return (
    
        <div className="Parallax" id='/Home'>
           
            <Nav>
                
            </Nav>
            <button className='LearnMore'><Link to='/About' smooth={true}  duration={320} >Learn More</Link></button>

        </div>
    );
}
    

export default Header;