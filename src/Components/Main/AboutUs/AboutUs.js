import React from 'react';
import Dad from '../../Assets/Dad.jpg'
import './AboutUs.css'

function AboutUs () {
    return (
        <div className='AboutUsContainer' id='/About'> 
            <div className='PicOfDavid'>
            <img src={Dad} alt="A picture of Practitioner" />
            </div>
            <div className='AboutUsParagraph'>
            <section>
        <h2>Practitioner</h2>
        <article>
            <h3>Registered Psychologist</h3>
            <p>David Winfield</p>
        </article>
    </section>

    <section>
        <h2>Qualifications</h2>
        <p>BA Psychology & Sociology, Graduate Diploma Educational Psychology</p>
    </section>

    <section>
        <h2>Professional Memberships</h2>
        <p>AHPRA</p>
    </section>

    <section>
        <h2>Psych Registration No</h2>
        <p>PSY6001123668</p>
    </section>

    <section>
        <h2>Experience</h2>
        <p>
            I have worked for over 30 years in the field of Psychology both in the public and private sector. I worked for GARRS which supported people who were in recovery of a severe mental illness. For over 10 years I worked as a practitioner and Team Leader for Connections & Anglicare in the Families First program. I now work in private practice and enjoy bringing about change in people's lives.
        </p>
        </section>
            </div>
              
        </div>

    );
}
    

export default AboutUs;