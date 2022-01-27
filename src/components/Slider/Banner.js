import React, { Fragment } from "react";
import "./Slider.css";
//componentes
import Slider from "./Slider";
//imagenes
import Header from "../../assets/images/Foto-header-21.png";


const Banner = () => {
  return (
    <Fragment>
      <Slider
        banner={Header}
        title="Lorem input dolor sit amet, consectetur addispasd elit."
      />
    </Fragment>
  );
};

export default Banner;
