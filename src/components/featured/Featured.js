import React, { Fragment } from "react";
import "./Featured.css";
// Imagenes
import ImgNotice from "../../assets/images/Low2.png";
import ImgNoticeTwo from "../../assets/images/Low1.png";
import ImgNoticeThree from "../../assets/images/Low3.png";
import ImgNoticeFour from "../../assets/images/Low4.png";
import Frame from "../../assets/images/Frame.png";

const Featured = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="one">
          <h1>Las más destacadas del mes anterior</h1>
        </div>
        <div className="two">
          <div className="date">
            <a href="!#">
              <span>25/01/2022</span>
            </a>
          </div>
          <img src={ImgNoticeTwo} alt="Segunda Imagen De Noticia" />

          <div className="featureTwo">
            <h1>
              Lorem subaru input dolor sir amet <br />
              cosnetuir adispasit elit.
            </h1>
            <div>
              <p>Lorem input dolor sir amet consetet</p>
            </div>
          </div>
        </div>
        <div className="three">
          <div className="dateThree">
            <a href="!#">
              <span>25/01/2022</span>
            </a>
          </div>
          <img src={ImgNotice} alt="Tercera Imagen De Noticia" />
          <div className="featureThree">
            <h1>
              Lorem subaru input dolor <br /> sir amet <br />
              cosnetuir adispasit elit.
            </h1>
            <div>
              <p>Lorem input dolor sir amet consetet</p>
            </div>
          </div>
        </div>
        <div className="five">
          <div className="dateFive">
            <a href="!#">
              <span>25/01/2022</span>
            </a>
          </div>
          <img src={ImgNoticeThree} alt="Quinda Imagen de Noticia" />
          <div className="featureFive">
            <h1>
              Lorem subaru input dolor <br /> sir amet <br />
              cosnetuir adispasit elit.
            </h1>
            <div>
              <p>Lorem input dolor sir amet consetet</p>
            </div>
          </div>
        </div>
        <div className="six">
          <div className="dateSix">
            <a href="!#">
              <span>25/01/2022</span>
            </a>
          </div>
          <img src={ImgNoticeFour} alt="Sexta Imagen de Noticia" />
          <div className="featureSix">
            <h1>
              Lorem subaru input dolor <br /> sir amet <br />
              cosnetuir adispasit elit.
            </h1>
            <div>
              <p>Lorem input dolor sir amet consetet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonFeatured">
        <img src={Frame} alt="Boton ir a subaru Colombia" />
        <a href="!#">Ir a Subaru Colombia</a>
      </div>
    </Fragment>
  );
};

export default Featured;
