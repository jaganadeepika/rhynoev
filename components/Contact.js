import React from 'react'
import "./Contact.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='detail'>
      <h1>Get In Touch</h1>
      <div className='row'>
    <div className='location'>
       <h2><b className='icon'><FaMapMarkerAlt /></b> Address</h2>
       <p>Rhyno Wheels Private limited, Near UG hostel, Behind PDEU,<br/> Raisan, Gandhinagar, Gujarat, India. </p>
    </div>
    <div className='contactus'>
    <h2><b className='icon'><FaPhoneAlt /> </b> Contact Number</h2>
      <p>+91-9023987528</p>
    </div>
    <div className='mail'>
           <h2><b className='icon'><FaEnvelope /></b>  Information</h2>
           <p>info@rhyno.in</p>
          </div>
    </div>
      </div>
      <div className='map'>
        
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2349.387797887!2d72.66588575922343!3d23.155102614626983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e802cfe647e33%3A0x983a11b5cb484f15!2sPandit%20Deendayal%20Energy%20University-%20PDEU%20(Formerly%20PDPU)!5e0!3m2!1sen!2sus!4v1719490151973!5m2!1sen!2sus" width="100%" height="450" style={{border:"0"}} allowfullscreen=""   title="Google Maps location of Rhyno Wheels Private Limited" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </div>
  )
}

export default Contact
