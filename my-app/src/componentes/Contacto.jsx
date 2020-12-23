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
            GitHub
          </a>
          <br />
          <br />
          <a href="https://www.linkedin.com/in/pamela-barboza/" target="_blank">
            LinkedIn
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
          <p>
            <strong> Frontend developer | Pamela Raquel Barboza - 2020</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
