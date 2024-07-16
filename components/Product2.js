import React, { useState } from 'react';
import black from "../assets/black.png";
import bike from "../assets/bike.png";
import gray from "../assets/gray.png";
import "./product.css";
import Logo from "../assets/battery.png"
import motor from "../assets/motor.png"
import {FaTachometerAlt,FaRoad } from 'react-icons/fa';

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    { color: 'black', image: black },
    { color: 'red', image: bike },
    { color: 'gray', image: gray }
  ];

  return (
    <div className='Container'>
      <div className='bike'>
        <div className='se03'>
          <h1>Introducing SE03 Lite</h1>
          <h2>Experience power and range in perfect harmony with Rhyno's 2000W motor and 50km/h max speed.</h2>
          <h3>Available Colors</h3>
          <div className='color-buttons'>
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color.color }}
                className={`color-button ${selectedColor === index ? 'selected' : ''}`}
                onClick={() => setSelectedColor(index)}
              >
              </button>
            ))}
          </div>
          <button className='buy'>Buy Now</button>
        </div>
        <img
          src={colors[selectedColor].image}
          alt={`Product in ${colors[selectedColor].color}`}
          className='product-image'
          width={400}
          height={500}
        />
      </div>
      <div className='details'>
        <h1>About Product</h1>
      <p className='context'>Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.<br/> Check out the other details below!
      </p>
           <h1>Textual Details</h1>
           <div className='row1'>
            <div className='col2'>
            <h2>Battery</h2>
            <p><strong>1.8Kwh</strong> LFP battery with 1500 Cycles,Active Balancing, <br/>waterproof,3-year Warranty and 3-hour Charge time(12A) </p>
            </div>
           <img src={Logo} alt="" width={400} height={200}/>
           </div>
           <div className='row1'>
            <div className='col2'>
            <h2>1500W Powerful motor</h2>
            <p>1 Year Warranty On Electronics</p>
            <p>Other Key Benefits of Rhyno are Fire-safe battery,Range Prediction,comfortable Ride,Stable and safe.</p>
            <div className='row1'>
            <p><b className='Icon'><FaTachometerAlt /><br/>50Km/h<br/></b>Max Speed</p>
            <p><b className='Icon'><br/>100km <br/></b>Max range<br/>(30Km/h)</p>
            <p><b className='Icon'><FaRoad/><br/>70Km <br/></b>Max range<br/>(Full speed)</p>
            <p><b className='Icon'><br/>90Km <br/></b>Max range<br/>(45Km/h)</p>
            </div>
           </div>
           <img src={motor} alt="" width={400} height={300}/>

           </div>
      </div>
    </div>
  );
};

export default Product;
