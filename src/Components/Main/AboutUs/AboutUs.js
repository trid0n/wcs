import React from 'react';
import Dad from '../../Assets/Dad.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='AboutUsContainer' id='/About'>
      <div className='PicOfDavid'>
        <img src={Dad} alt="A picture of David Winfield" />
      </div>
      <h1 className='title'>Practitioner</h1>
      <div className='AboutUsParagraph'>
        <table className='centered-table'>
          <tbody>
            <tr>
              <td>
                <h3 className='table-title'>Registered Psychologist</h3>
                <p>David Winfield</p>
              </td>
              <td>
                <h3 className='table-title'>Qualifications</h3>
                <p>BA Psychology & Sociology, Graduate Diploma Educational Psychology</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className='table-title'>Professional Memberships</h3>
                <p>AHPRA</p>
              </td>
              <td>
                <h3 className='table-title'>Psych Registration No</h3>
                <p>PSY6001123668</p>
              </td>
            </tr>
          </tbody>
        </table>
        <section>
          <h3 className='Experience-title'>Experience</h3>
          <p><i>
            I have worked for over 30 years in the field of Psychology both in the public and private sector. I worked for GARRS which supported people who were in recovery of a severe mental illness. For over 10 years I worked as a practitioner and Team Leader for Connections & Anglicare in the Families First program. I now work in private practice and enjoy bringing about change in people's lives.
            </i></p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
