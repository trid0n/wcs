import React from 'react';
import './Fees.css'


function Fees () {
    return (
        <div id='/Fees'>
            <div  className='Fees'>
            <div  className='Fees-container'>

              <p className='Fees-h1'>FEES</p>  
              <p className='Fees-p'>Most clients are referred by their GP under a 
                Mental Health Treatment Plan but can also be 
                accessed through a specialist. All referrals 
                are to be faxed, mailed or emailed  before an 
                appt can be organised. Please contact Suzy to 
                arrange any appointments and she will be able 
                to assist. Contact details can be found on the 
                appropriate page. 
                <br></br>

                A receipt will be given upon payment of upfront 
                cost and a rebate from Medicare will be organised 
                which can take up to 48 hours to be processed.
                <br></br>

                You are able to claim up to 10 sessions per calendar 
                year under a Mental Health Treatment Plan. The initial 
                referral covers you for 6 sessions then another appointment 
                is required with your GP to access the last 4. <b>Any appointment times made after 5pm will incur a $20 after hours levy</b>
                <br></br>
                </p>
              <p className='Fees-h2'>UPFRONT FEES PER SESSION</p>
              <p className='Fees-p'>$160 per session ($67.10 out of pocket after 
                medicare rebate). If a Mental Health Treatment Plan is not organised, 
                full fees are to be paid although some clients can claim a 
                rebate through their private health insurance. The upfront costs can 
                be paid via cash, EFT, cheque or direct deposit. Accredited options are Workcover, TAC,  DVA, NDIS 
                or VOCAT. <br></br></p>

              <p></p>
                  
              <p className='Fees-h2'>CANCELLATIONS</p>
              <p className='Fees-p' id='last-section'> 24 hours notice is needed when cancelling 
                appointments otherwise a fee will be incurred</p>
            </div>
        </div>
    </div>

    );
}
    

export default Fees;