import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="!#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="!#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="!#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="!#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="footer-left">
          <p className="footer-links">
            Subaru @ 2021 All Right reserved - Powered by
            <span>Solucionsoft</span>
          </p>
          <div className="line"></div>
          <p className="footer-links">
            <span>Contáctanos</span>Tel:3210004444 o escribenos a
            contacto_suburu@didacol.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
