/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../componentes/Contacto.css";

const Contacto = () => {
  return (
    <div id="contacto" className="footer">
      <h2>Contacto</h2>
      <br />
      <div className="columnaText2">
        <ul>
          <a href="https://github.com/PamelaBarboza" target="_blank">
            <img src="https://img.icons8.com/nolan/64/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/pamela-barboza/" target="_blank">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
          </a>
        </ul>
        <div className="columnaText2">
          <ul>
            <li>pamelarabarboza@gmail.com</li>
            <br />
            <li>+56 9 8669 3370</li>
          </ul>
        </div>
        <div className="PamelaFooter">
          <p> Frontend developer | Pamela Raquel Barboza &#169; 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
