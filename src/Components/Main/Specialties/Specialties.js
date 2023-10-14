import React from 'react';
import Dad from '../../Assets/Dad.jpg'
import './Specialties.css'


function Specialties () {
    return ( 
        <div className='SpecialtiesContainer'> 
            <div className='SpecialtiesParagraph'>
        <h2>Specialties</h2>
        <p>content</p>
        </div>
        <div className='PicOfDavid'>
            <img src={Dad} alt="A picture of Practitioner" />
            </div>
        </div>

    );
}
    

export default Specialties;