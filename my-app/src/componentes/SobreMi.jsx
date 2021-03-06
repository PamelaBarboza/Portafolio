import React from "react";
import "../componentes/sobreMi.css"; 

const SobreMi = () => {
  return (
    <div id="sobreMi">
      <h2>Sobre Mi</h2>
      <br />
      <br />
      <div className="textoSobreMi">
        <p>
          Soy apasionada por la tecnología, curiosa y divertida. Me gusta saber
          como funcionan las cosas. Dedicada a programar, cambiar y adaptar el
          diseño de una web a diversos dispositivos y navegadores, creando
          herramientas que mejoren la interacción entre usuario y la web.
          <br />
          <br />
          Entre mis fortalezas yo destaco mi perseverancia y mi poder para
          superar la frustración. Mi mayor desafío, porque más que una debilidad
          es un desafío, es el manejo de mi ansiedad, pero trabajo
          constantemente en ello realizando ejercicios como: caminar, andar en bicicleta, bailar. <br />
          <br />
          Mi mayor reto en la vida fue irme de mi país sola, para buscar y
          cumplir mis sueños.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
