import React from 'react';
import './About.css';
import golden from "../assets/golden.png";

function App() {
  return (
    <div className="banner">
      <div className='banner-container'>
        <div className='container'>
          <h1>About Us</h1>
          <p>Rhyno EV is solving the commercial mobility needs with Made-In-India eScooter – a simplified, ergonomically optimized, and carefully engineered Electric Special Utility Vehicle.
            <br/>Inspired by the rhino, the company designs expressly in answer to the need for a durable, high caliber, high-speed electric scooter.
            </p>
        </div>
        <img src={golden} alt="Golden Scooter" width={800} height={670} />   </div>
      <div className='header-container'>
        <div className='content'>
          <h1>More About Us</h1>
          <p>Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
          </p>
        </div>
        <div className='main'>
          <div className='vision'>
            <h2>Vision</h2>
            <p>Our vision is to revolutionize the electric vehicle industry with innovative and reliable solutions and to pioneer a new era in sustainable and dependable electric transportation.</p>
          </div>
          <div className='mission'>
            <h2>Mission</h2>
            <p>Our mission is to create a unique experience of elegance, comfort, and style with our electric scooters, prioritizing safety and longevity, and addressing the pitfalls of conventional electric scooters. We aim to provide solutions that are perfectly suited for fleet operators, especially in tourist-centric locations like Goa, by engineering rugged yet aesthetically appealing scooters.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
