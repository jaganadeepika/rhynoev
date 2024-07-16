import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import CompareAll from './components/CompareAll';
import Contact from './components/Contact';
import PreBook from './components/prebook';
import Navbar from './components/navbar'
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Privacypolicy from './components/Privacy';
import Refundpolicy from './components/Refund';
import Websitepolicy from './components/website';
import Rental from "./components/Rental";
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/rhynoev" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/product1" element={<Product1/>} />
          <Route path="/product2" element={<Product2/>} />
          <Route path="/product3" element={<Product3/>} />
          <Route path="/compare" element={<CompareAll/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/prebook" element={<PreBook/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/privacy-policy" element={<Privacypolicy/>} />
          <Route path="/refund-policy" element={<Refundpolicy/>} />
          <Route path="/website-policy" element={<Websitepolicy/>} />
          <Route path="/rental" element={<Rental/>} />

        </Routes>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
