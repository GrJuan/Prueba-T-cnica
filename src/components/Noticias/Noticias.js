import React, { Fragment } from "react";
import "./Noticias.css";
//componente
import Tarjeta from "./Tarjeta";
//Imagenes
import headerOne from "../../assets/images/Foto-header1.png";
import headerTwo from "../../assets/images/Mask-Group.png";
//iconos
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Noticias = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="titulo">
          <h1>Listado de Noticias</h1>
        </div>
        <div className="noticias">
          <Tarjeta
            date="25/01/2022"
            title="Lorem input dolor sit amet, consectetur addispasd elit."
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
                                dolorum architecto obcaecati enim dicta praesentium, quam nobis!
                                Neque ad aliquam facilis numquam. Veritatis, sit."
            header={headerOne}
          />
          <Tarjeta
            date="25/01/2022"
            title="Lorem input dolor sit amet, consectetur addispasd elit."
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
                                dolorum architecto obcaecati enim dicta praesentium, quam nobis!
                                Neque ad aliquam facilis numquam. Veritatis, sit."
            header={headerTwo}
          />
          <Tarjeta
            date="25/01/2022"
            title="Lorem input dolor sit amet, consectetur addispasd elit."
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
                                dolorum architecto obcaecati enim dicta praesentium, quam nobis!
                                Neque ad aliquam facilis numquam. Veritatis, sit."
            header={headerOne}
          />
          <Tarjeta
            date="25/01/2022"
            title="Lorem input dolor sit amet, consectetur addispasd elit."
            info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
                                dolorum architecto obcaecati enim dicta praesentium, quam nobis!
                                Neque ad aliquam facilis numquam. Veritatis, sit."
            header={headerTwo}
          />
        </div>
        <div className="paginacion">
          <ul className="pagination">
            <li>
              <a className="before" href="!#">
                <IoIosArrowBack />
              </a>
            </li>
            <li>
              <a className="active" href="!#">
                1
              </a>
            </li>
            <li>
              <a href="!#">2</a>
            </li>
            <li>
              <a href="!#">3</a>
            </li>
            <li>
              <a href="!#">4</a>
            </li>
            <li>
              <a href="!#">5</a>
            </li>
            <li>
              <a className="active" href="!#">
                <IoIosArrowForward />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Noticias;
