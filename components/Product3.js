import React, { useState } from 'react';
import golden from "../assets/golden.png";
import bike from "../assets/bike.png";
import gray from "../assets/gray.png";
import "./product.css";
import Logo from "../assets/battery.png"
import motor from "../assets/motor.png"
import {FaTachometerAlt,FaRoad } from 'react-icons/fa';
const Product = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    { color: 'yellow', image: golden },
    { color: 'red', image: bike },
    { color: 'gray', image: gray }
  ];

  return (
    <div className='Container'>
      <div className='bike'>
        <div className='se03'>
          <h1>Introducing SE03 Max</h1>
          <h2>Rhyno: Reliable Long-Drive Performer with 150km Range</h2>
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
      <p className='context'>This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.</p>
           <h1>Textual Details</h1>
           <div className='row1'>
            <div className='col2'>
            <h2>Battery</h2>
            <p><strong>2.7Kwh</strong> LFP battery with 1500 Cycles,Active Balancing, <br/>waterproof,3-year Warranty and 4-hour Charge time(12A) </p>
            </div>
           <img src={Logo} alt="" width={400} height={200}/>
           </div>
           <div className='row1'>
            <div className='col2'>
            <h2>2000W Powerful motor</h2>
            <p>1 Year Warranty On Electronics</p>
            <p>Other Key Benefits of Rhyno are Fire-safe battery,Range Prediction,comfortable Ride,Stable and safe.</p>
            <div className='row1'>
            <p><b className='Icon'><FaTachometerAlt /><br/>65Km/h<br/></b>Max Speed</p>
            <p><b className='Icon'><br/>120km <br/></b>Max range<br/>(30Km/h)</p>
            <p><b className='Icon'><FaRoad/><br/>80Km <br/></b>Max range<br/>(Full speed)</p>
            <p><b className='Icon'><br/>100Km <br/></b>Max range<br/>(45Km/h)</p>
            </div>
           </div>
           <img src={motor} alt="" width={400} height={300}/>
           </div>
      </div>
    </div>
  );
};

export default Product;
