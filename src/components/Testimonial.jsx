import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import mexicoFlag from "../assets/mexico.png";
import chileFlag from "../assets/chile.png";
import argFlag from "../assets/arg.jpg";
import uruFlag from "../assets/uru.png";
import { testimonials as data } from "../components/homedata/data";

const Testimonial = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const flags = {
    México: mexicoFlag,
    Argentina: argFlag,
    Uruguay: uruFlag,
    Chile: chileFlag,
  };

  const handleNext = () => {
    if (carouselIndex < data.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 10000);
    return () => clearInterval(intervalId);
  }, [carouselIndex, data.length]);

  const currentData = data[carouselIndex];

  return (
    <div className="testimonial-component">
      <h2>¿Qué dicen los que han trabajado conmigo?</h2>

      <div className="back-testimonials">
        <div className="testimonials-container">
          <div className="flag-container">
            <img src={flags[currentData.userCountry]} alt={data.userCountry} />
          </div>

          {/* ------- text ------- */}
          <div className="testimonial-info">
            <h2>{currentData.userName}</h2>
            <p>{currentData.UserCategory}</p>
            <p className="testimonial-text">{currentData.userTestimonial}</p>
            <span>{currentData.userCountry}</span>
          </div>
        </div>
      </div>
      <div className="dots-container">
        {data.map((item, index) => (
          <button
            onClick={() => setCarouselIndex(index)}
            className={
              index === carouselIndex ? "carousel-dots active" : "carousel-dots"
            }
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;