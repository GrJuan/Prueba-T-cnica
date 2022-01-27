import React, { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./Noticias.css";
const Tarjeta = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="blog-card">
          <div className="meta">
            <div className="photo">
              <img src={props.header} alt="Header" />
            </div>
          </div>
          <div className="description">
            <div className="fecha">
              <a href="!#">
                <span>{props.date}</span>
              </a>
            </div>
            <div>
              <h1>{props.title}</h1>
              <p>{props.info}</p>
            </div>
            <div>
              <p className="read-more">
                <a href="!#">
                  <span>
                    Saber más
                    <AiOutlinePlus
                      style={{ paddingTop: "4px", marginLeft: "14px" }}
                    />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tarjeta;
