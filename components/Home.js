import React, { useState, useEffect } from "react";
import "./Home.css";
import photo1 from "../assets/grp.png";
import photo2 from "../assets/brown.png";
import photo3 from "../assets/black.png";
import photo4 from "../assets/blue.png";
import photo5 from "../assets/golden.png";
import {Link} from "react-router-dom";

const Home = () => {
  const words = ["Style", "Elegance", "Minimalism", "Comfort"];
  const photos = [photo1, photo2, photo3];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(photoInterval);
    };
  }, [words.length, photos.length]);

 
  return (
    <div className="home-container">
      <h1 className="headline">
        Let's Elevate Your Ride Experience With Rhyno <br />– Where Superiority Meets{" "}
        <span className="changing-word">{words[currentWordIndex]}</span>
      </h1>

      <div className="photo-container">
        <img
          src={photos[currentPhotoIndex]}
          alt="Rhyno Ride"
          className="photo"
        />
      </div>

      <section className="product-container">
        <div className="product">
          <img src={photo4} alt="SE03" width={300} height={300} />
          <h1>SE03</h1>
          <div className="checkout-button">
          <Link to="/checkout"><button>Check Out</button></Link>
            </div>
            </div>
        <div className="product">
          <img src={photo3} alt="SE03 Lite" width={300} height={300} />
          <h1>SE03 Lite</h1>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>Check Out</button>
            </Link>
        </div>
        </div>
        <div className="product">
          <img src={photo5} alt="SE03 Max" width={300} height={300} />
          <h1>SE03 Max</h1>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>Check Out</button>
            </Link>
        </div>
        </div>
      </section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-block w-100" style={{ backgroundColor: '#252525', height: '300px' }}></div>
      <div className="carousel-caption d-block">
        <h5>LFP Battery</h5>
        <p>Rhyno uses advanced Lithium Iron Phosphate (LFP) batteries. Our Active Balancing Smart Battery Management System (BMS) enhances battery life and reduces maintenance. Each battery undergoes rigorous IP76 waterproofing tests for durability. </p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" style={{ backgroundColor: '#252525', height: '300px' }}></div>
      <div className="carousel-caption d-block">
        <h5>Wider Tyres</h5>
        <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" style={{ backgroundColor: '#252525', height: '300px' }}></div>
      <div className="carousel-caption d-block">
        <h5>Range prediction</h5>
        <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" style={{ backgroundColor: '#252525', height: '300px' }}></div>
      <div className="carousel-caption d-block">
        <h5>Extraordinary Experience</h5>
        <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" style={{ backgroundColor: '#252525', height: '300px' }}></div>
      <div className="carousel-caption d-block">
        <h5>Rugged and Simple Design</h5>
        <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  );
};

export default Home;
