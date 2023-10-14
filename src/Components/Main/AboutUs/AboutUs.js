import React from 'react';
import Dad from '../../Assets/Dad.jpg'


function AboutUs () {
    return (
        <div>
            <div className='PicOfDavid'>
            <img src={Dad} alt="A picture of Practitioner" />
            </div>
            <div className='AboutUsParagraph'>
                <h1>
              PRACTITIONER
              REGISTERED PSYCHOLOGIST
 
 DAVID WINFIELD
  
 QUALIFICATIONS:BA Psychology & Sociology, Graduate Diploma Educational Psychology
 
 PROFESSIONAL MEMBERSHIPS: AHPRA
 
 PSYCH REGISTRATION NO: PSY6001123668
  
  
 EXPERIENCE: I have worked for over 25 years in the field of Psychology both in the public and private sector. 
 I worked for GARRS which supported people who were in recovery of a severe mental illness. 
 For over 10 years I worked as a practitioner and Team Leader for Connections & Anglicare in the Families First program. 
 I now work in private practice and enjoy bringing about change in people's lives.
                </h1>
            </div>
              
        </div>

    );
}
    

export default AboutUs;