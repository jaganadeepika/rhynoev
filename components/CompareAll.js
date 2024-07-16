import React from 'react';
import "./compare.css";
import blue from "../assets/blue.png"
import black from "../assets/black.png"
import golden from "../assets/golden.png"

import {Link} from "react-router-dom"
const ComparisonTable = () => {
  const specs = [
    { name: 'Battery Capacity', lite: '1.8 kWh', se03: '2.0 kWh', max: '2.7 kWh' },
    { name: 'Battery Features', lite: 'LFP with 1500 cycles,Active Balancing and Waterproof (IP67)' ,se03:'LFP with 1500 cycles,Active Balancing and Waterproof (IP67)',max:'LFP with 1500 cycles,Active Balancing and Waterproof (IP67)'},
    { name: 'Battery Warranty', lite: '3 Years', se03: '3 Years', max: '3 Years' },
    { name: 'Max Speed', lite: '55 km/h', se03: '55 km/h', max: '65 km/h' },
    { name: 'Max Range(@Full Speed)', lite: '60 km', se03: '90 km', max: '80 km' },
    { name: 'Max Range(@30km/h)', lite: '100 km', se03: '150 km', max: '120 km' },
    { name: 'Max Range(@45km/h)', lite: '90 km', se03: '110 km', max: '100 km' },
    { name: 'Motor Power', lite: '1500W', se03: '1500W', max: '2000W' },
    { name: 'Charging Time', lite: '3 hours', se03: '3 hours', max: '4 hours' },
    { name: 'Warranty On Electronics', lite: '1 Year', se03: '1 Year', max: '1 Year' },

  ];

  return (
    <div className='Compare'>
      <div className='Image'>
        <div className='Image-row'>
      <img src={blue} alt="" width={300} height={400}/>
      <h1>SE03</h1>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>Buy Now</button>
            </Link>
            </div>
            </div>
            <div className='Image-row'>
      <img src={black} alt="" width={300} height={400}/>
      <h1>SE03 Lite</h1>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>Buy Now</button>
            </Link>
            </div>
            </div>
            <div className='Image-row'>
      <img src={golden} alt="" width={300} height={400}/>
      <h1>SE03 Max</h1>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>Buy Now</button>
            </Link>
            </div>
            </div>
          </div>
          
    <div className="comparison-table">
    <h1>Compare All</h1>
      <div className="table-header">
        <div className="spec-name">Specification</div>
        <div className="spec-model">Rhyno SE03 Lite</div>
        <div className="spec-model">Rhyno SE03</div>
        <div className="spec-model">Rhyno SE03 Max</div>
      </div>
      {specs.map((spec, index) => (
        <div className="table-row" key={index}>
          <div className="spec-name">{spec.name}</div>
          <div className="spec-value">{spec.lite}</div>
          <div className="spec-value">{spec.se03}</div>
          <div className="spec-value">{spec.max}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ComparisonTable;
