import React, { Component } from "react";
import Faq from "react-faq-component";
import './FAQ.css'

const data = {
  
  rows: [
    {
      title: "How do I arrange to see a psychologist?",
      content: 'Please ring 0430203049 or email <a href=mailto:warragulcpunsellingservices@gmail.com> Warrafulcounsellingservices@gmail.com</a> to arrange an appointment. If you would like your appointments to be subsidised, this can be done through obtaining a mental health plan and referral or through other methods referred to below.'
        
    },
    {
      title: "What is a mental health care plan (MHCP)?",
      content:
        "A MHCP or mental healthcare plan is a type of referral written by adoctor that entitles a patient to Medicare rebates on psychologysessions. A MHCP allows patients' to access 6 psychological therapysessions subsidised by Medicare. After a patient has used thesesessions, they can then visit their GP to obtain a MHCP Review,allowing them to access an additional 4 subsidised sessions. Patientsare entitled to receive a total of up to 10 subsidised sessions in acalendar year."
    },
    {
      title: "How do I arrange a referral?",
      content: "You don't need a referral to see a psychologist. However, if you would like to receive a Medicare rebate on your psychology sessions, you will need to arrange for your GP, Psychiatrist, or Pediatrician to prepare a Mental Healthcare Plan. When you book to see your doctor, make sure you let the reception know you would like a Mental Healthcare Plan, as usually a double appointment is required to complete these types of referrals."
    },
    {
      title: "How do I pay?",
      content: "The psychologist will process your payment via EFTPOS or direct deposit."
    },
    {
      title: "How much does it cost to see a psychologist?",
      content: "The cost to see David Winfield, a psychologist, is an upfront fee of $160 per session."
    },
    {
      title: "How long does it take to receive a rebate?",
      content: "We process the Medicare rebate on your behalf after the session has been paid for. You should receive the rebate within 1-3 business days on your nominated debit card with Medicare."
    },
    {
      title: "Do you accept Veteran's affairs cards, TAC, healthcare, workcover, NDIS, or do you bulk bill?",
      content: "We're a full fee-paying practice, so unfortunately, we do not bulk bill, but we do accept DVA, TAC, workcover, and NDIS. You will receive a partial rebate if using your Healthcare fund. A receipt will be issued, and you may use this to send to your Healthcare Provider, and they will then process the rebate for you."
    },
    {
      title: "Do you take children as clients?",
      content: "Unfortunately, we are currently only seeing clients from the age of 12 years and up, as I have not specialized in this area of mental health. However, do not hesitate to contact our admin who can refer you to some of our recommended Child Psychologists."
    },
    {
      title: "What is your cancellation policy?",
      content: "We have a 24-hour cancellation policy (in business hours/days) for canceling an appointment. We require this notice to allow us enough time to book other clients who are on waiting lists. If less than 24 hours' notice is provided, a full fee will be charged with payment to be made via direct deposit."
    },
    {
      title: "Telehealth or face to face? Can I do a phone call?",
      content: "We offer face-to-face services while telehealth or phone calls are only offered when the Government enforces lockdowns."
    },
    {
      title: "How long does a psychology session go for?",
      content: "A standard consultation is just over 50 minutes, which is for all sessions, including the first session."
    },
    {
      title: "Can I bring a partner or family member into a session?",
      content: "We understand that your initial sessions can be intimidating for some, so you are more than welcome to bring along support to wait outside or in the room with you."
    }
    
  ]
};

const styles = {
  // bgColor: 'white',
  rowTitleColor: "black",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default class App extends Component {
  render() {
    return (
      <div id='/FAQ'>
        <div className="FAQ-title">
          <h1>FAQ</h1>
        </div>
        <div className="FAQ-container">
          <div className="column-container">
            <Faq data={{ rows: data.rows.slice(1, 6) }} styles={styles} config={config} />
          </div>
          <div className="column-container">
            <Faq data={{ rows: data.rows.slice(7, 12) }} styles={styles} config={config} />
          </div>
        </div>
      </div>
    );
  }
}
