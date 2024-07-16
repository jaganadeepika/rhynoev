import React, { useState } from 'react';
import './checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>  
          <h2>Billing Information</h2>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="state" 
            placeholder="State" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="zip" 
            placeholder="ZIP Code" 
            value={formData.zip} 
            onChange={handleChange} 
            required 
          />
          <h2>Payment Information</h2>
          <input 
            type="text" 
            name="cardNumber" 
            placeholder="Card Number" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="expiry" 
            placeholder="Expiry Date (MM/YY)" 
            value={formData.expiry} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="cvv" 
            placeholder="CVV" 
            value={formData.cvv} 
            onChange={handleChange} 
            required 
          />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
