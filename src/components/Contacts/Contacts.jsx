import React from 'react'
import "./contacts.css"

export default function Contacts() {
  return (
    <div className='contacts'>
      <div className="contacts-left">
        <p className="contact-title">Phone</p>
        <a
        href="tel:+905525615181"
        className="contact-num">
          +90 552 561 51 81
        </a>
        <p className="contact-title">Email</p>
        <p className='contact-email'>A&Asalon@gmail.com</p>
        <div className="iconContainer">
          <div className="youtube-icon contact-icon"></div>
        <div className="instagram-icon contact-icon"></div>
        <div className="facebook-icon contact-icon"></div>
        </div>
      </div>
      <div className="contacts-right">
        <p className="contact-title">Adress</p>
        <p className='contacts-adress'>
          Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
        </p>
      </div>
    </div>
  )
}
