import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/Main.css";
export const Investors = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="front-content">
        <div className="container-mid">
          <div
            className="animation-container animation-fade-right"
            data-animation-delay="300"
          >
            <h1>Coming Soon..</h1>
          </div>

          <div
            onClick={() => navigate("/")}
            className="animation-container animation-fade-up"
            data-animation-delay="900"
          >
            <div className="open-popup">Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};
