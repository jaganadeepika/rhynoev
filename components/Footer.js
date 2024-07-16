import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Logo from "../assets/Rhynologo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={Logo} alt=""/>
        <p>Mail: info@rhyno.in <br/> Mobile no.: +91-9023987528<br/>
Location: Rhyno Wheels Private limited, Near UG hostel gate #2,<br/> Behind PDEU,
Raisan, Gandhinagar, Gujarat, India.</p>
      </div>
      <div className='Products'>
        <ul>
          <h3>Products</h3>
          <p><li><Link to ="/product1">Rhyno SE03</Link></li>
         <li> <Link to ="/product2">Rhyno SE03 Lite</Link></li>
         <li> <Link to="/product3">Rhyno SE03 Max</Link></li></p>
         </ul>
        </div>
      <div className='Sevices'>
      <ul>
        <h3>Services</h3>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/refund-policy">Refund Policy</Link></li>
        <li><Link to="/website-policy">Website Policy</Link></li>
        </ul>
        </div>
         
        <div className='Link'>
          <ul>
            <h3>Quick Links</h3>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/rental">Rentals</Link></li>
        </ul>
  </div>
      <div className="social-icons">
        <h3>Follow Us on</h3>
        <ul>
        <li>
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className='linkedin'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          
      <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer" className='Instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </li>
            </ul>
      </div>
    </footer>
  );
};

export default Footer;
