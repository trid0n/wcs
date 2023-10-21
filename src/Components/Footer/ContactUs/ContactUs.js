import React from 'react';
import './ContactUs.css';


function ContactUs () {
    return (
        <footer>
    <div className='footer-title'>
        <h3>Warragul Counselling Services</h3>
    </div>
    <div className="footer-container">
    
    <div className="footer-section">
      <p>Office: 60 Victoria Street Warragul - Open Weekdays</p>
    </div>
    <div className="footer-section">
      <p>Postal Address: PO Box 787 Warragul Vic 3820</p>
    </div>
    <div className="footer-section">
      <p>Telephone: (+61) 0430203049</p>
      <p>Facsimile: (03) 8677 1199</p>
    </div>
    <div className="footer-section">
      <p>Email: warragulcounsellingservices@gmail.com</p>
    </div>
  </div>
  <p className="copyright-notice">&copy; 2023 Warragul Counselling Services. All rights reserved</p>
</footer>

    );
}
    

export default ContactUs;