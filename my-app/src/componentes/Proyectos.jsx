/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Slider from "react-slick";
import ProyectoDos from "../img/proyecto_dos.png";
import ProyectoUno from "../img/proyecto_uno.png";
import ProyectoTres from "../img/proyecto_tres.png";
import ProyectoCuatro from "../img/proyecto_cuatro.png";
import ProyectoCinco from "../img/proyecto_cinco.png";
import "../componentes/Proyectos.css";

const Proyectos = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="proyectos">
      <h2>Proyectos</h2>

      <div>
        <Slider {...settings}>
          <div className="img_proyecto">
            <a href="https://coffe-queen.web.app" target="_blank">
              Coffee Queen
            </a>
            <br />
            <p>Tecnología utilizada</p>
            <p>
              <strong>React | Firebase | GitHub </strong>
            </p>
            <img src={ProyectoDos} alt="Proyecto Coffee Queen" />
          </div>
          <div className="img_proyecto">
            <a href="comida-para-todos-595f3.web.app" target="_blank">
              Fundación: Comida para todos
            </a>
            <br />
            <p>Tecnología utilizada</p>
            <p>
              <strong>React | Firebase | Git | GitHub | Bootstrap</strong>
            </p>
            <img src={ProyectoUno} alt="Proyecto Comida para todos" />
          </div>
          <div className="img_proyecto">
            <a
              href="https://danielablancom.github.io/SCL014-social-network"
              target="_blank"
            >
              Red social: EASYCOOK
            </a>
            <br />
            <p>Tecnología utilizada</p>
            <p>
              <strong>Javascript | Firebase | Css </strong>
            </p>
            <img src={ProyectoTres} alt="Red social - Easycook" />
          </div>
          <div className="img_proyecto">
            <a
              href="https://pamelabarboza.github.io/SCL014-data-lovers/src/index.html"
              target="_blank"
            >
              Data lovers: Harry Potter
            </a>
            <br />
            <p>Tecnología utilizada</p>
            <p>
              <strong>Javascript | Css | GitHub</strong>
            </p>
            <img src={ProyectoCuatro} alt="Data lovers Harry Potter" />
          </div>
          <div className="img_proyecto">
            <a
              href="https://pamelabarboza.github.io/SCL014-cipher/src/index.html"
              target="_blank"
            >
              Caesar cipher
            </a>
            <br />
            <p>Tecnología utilizada</p>
            <p>
              <strong>Javascript | Css | GitHub</strong>
            </p>
            <img src={ProyectoCinco} alt="Caesar Cipher" />
          </div>
 
        </Slider>
      </div>
    </div>
  );
};

export default Proyectos;
