import React from "react";
import "./Slider.css";
import { AiOutlinePlus } from "react-icons/ai";
const Slider = (props) => {
  return (
    <div>
      <div className="carousel">
        <ul className="slides">
          <input type="checkbox" name="radio-buttons" id="img-1" defaultChecked />
          <li className="slide-container">
            <div className="slide-image">
              <img src={props.banner} alt="Banner Slider" />
            </div>
            <div className="centrado">
              <h1>{props.title}</h1>
            </div>
            <div className="carousel-controls">
              <label className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel-dots">
            <label className="carousel-dot" id="img-dot-1"></label>
            <label className="carousel-dot"></label>
            <label className="carousel-dot"></label>
            <label className="carousel-dot"></label>
          </div>
          <div className="button-dots">
            <a href="!#">
              <span>Saber más</span>
              <AiOutlinePlus
                style={{
                  paddingTop: "6px",
                  marginLeft: "14px",
                }}
              />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
