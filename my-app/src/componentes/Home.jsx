import React from "react";
import imagenPortada from "./../img/perfil.jpg";
import '../componentes/Home.css';



const Home = () => {
  return (
    <div className="portada">
      <div className="containerTextNav">
        <img className="imgPortada" src={imagenPortada} alt="imagenPortada" />
      </div>
      <div className="nombre">
        <h3>Frontend Developer</h3>
        <h1>Pamela Raquel Barboza</h1>
      </div>
    </div>
  );
};

export default Home;
