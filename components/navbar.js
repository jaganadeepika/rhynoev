import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/Rhynologo.png";
import { FaBars, FaTimes} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" width={300} height={120} />
      <ul className={isMobile ? "nav-links-mob" : "nav-links"}>
        <Link to="/rhynoev" className="home" onClick={closeMobileMenu}>
          <li>Home</li>
        </Link>
        <Link to="/about" className="about" onClick={closeMobileMenu}>
          <li>About Us</li>
        </Link>
        <li
          className="products"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Products
          {isDropdownOpen && (
            <ul className="dropdown">
              <Link to="/product1" onClick={closeMobileMenu}>
                <li>SE03</li>
              </Link>
              <Link to="/product2" onClick={closeMobileMenu}>
                <li>SE03 Lite</li>
              </Link>
              <Link to="/product3" onClick={closeMobileMenu}>
                <li>SE03 Max</li>
              </Link>
              <Link to="/compare" onClick={closeMobileMenu}>
                <li>Compare All</li>
              </Link>
            </ul>
          )}
        </li>
        <Link to="/contact" className="contact" onClick={closeMobileMenu}>
          <li>Contact Us</li>
        </Link>
        <Link to="/prebook" className="prebook" onClick={closeMobileMenu}>
          <li>PreBook</li>
        </Link>
        <ul className="ic-on">
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className='linkedin'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer" className='Instagram'>
              <FontAwesomeIcon icon={faInstagram} /></a>
        </ul>
      </ul>
      <button className="mob-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <h1><FaTimes /></h1> : <h1><FaBars /></h1>}
      </button>
    </nav>
  );
};

export default Navbar;
