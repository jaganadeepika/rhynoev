import React, { useState } from 'react';
import { FaPaypal, FaGooglePay, FaApplePay, FaCcVisa, FaStripe, FaCcMastercard } from 'react-icons/fa';
import "./checkout.css"
const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    phone: '',
    date: '',
    time: '',
    models: '',
    color: '',
  });
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (color, index) => {
    setFormData({ ...formData, color });
    setSelectedColor(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const colors = [
    { color: 'red' },
    { color: 'grey' },
    { color: 'blue' },
    { color: 'yellow' }
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h1>Pre-Book Now</h1>
        <form onSubmit={handleSubmit}>
          Enter Full Name: <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br/><br/>
          Enter Email Id:<input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br/><br/>
          Phone Number: <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br/><br/>
         Enter Address: <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          /><br/><br/>
          Enter City: <input
            type="text"
            name="City"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          /><br/><br/>
          Enter State:<input 
            type="text" 
            name="state" 
            placeholder="State" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          /><br/><br/>
          Enter Zip Code:<input 
            type="text" 
            name="zip" 
            placeholder="Zip Code" 
            value={formData.zip} 
            onChange={handleChange} 
            required 
          /><br/><br/>
          
          Select Model:<select
            name="models"
            value={formData.models}
            onChange={handleChange}
            required
          >
          
            <option value="">Models</option>
            <option value="SE03">SE03</option>
            <option value="SE03 Lite">SE03 Lite</option>
            <option value="SE03 Max">SE03 Max</option>
          </select><br/><br/>
          
          Select Color:  <div className="color-buttons">
            {colors.map((colorObj, index) => (
              <button
                type="button"
                key={index}
                style={{ backgroundColor: colorObj.color }}
                className={`color-button ${selectedColor === index ? 'selected' : ''}`}
                onClick={() => handleColorSelect(colorObj.color, index)}
              >
                </button>
            ))}
          </div>
          <h2>Payment Information</h2>
          
         <div className="payment-icons">
      <FaPaypal className="Icons" />
      <FaGooglePay className="Icons" />
      <FaApplePay className="Icons" />
      <FaCcVisa className="Icons" />
      <FaStripe className="Icons" />
      <FaCcMastercard className="Icons" />
    </div>
          Cardholder Name:<input
              type="text"
              name="cardHolder"
              placeholder="Cardholder Name"
              value={formData.cardHolder} 
            onChange={handleChange} 
            required 
          /><br/><br/>
          Card Number:<input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber} 
            onChange={handleChange} 
            required 
          /><br/><br/>
           Expiration Date:<input 
            type="text" 
            name="expiry" 
            placeholder="Expiry Date (MM/YY)" 
            value={formData.expiry} 
            onChange={handleChange} 
            required 
          />
        <br/><br/>
        Verification:<input 
            type="text" 
            name="cvv" 
            placeholder="CVV" 
            value={formData.cvv} 
            onChange={handleChange} 
            required 
          /><br/><br/>
      
     
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PreBook;
