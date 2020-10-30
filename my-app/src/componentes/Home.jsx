import React from "react";
import imagenPortada from "./../img/perfil.jpg";
import '../componentes/Home.css';



const Home = () => {
  return (
    <div className="portada">
      <div className="containerTextNav">
        <img className="imgPortada"src={imagenPortada} alt="imagenPortada"/>
        <h1>HOLA!</h1>
        <h3>soy Pamela Barboza</h3>
        <h4>Frontend Developer</h4>
        <a href="#proyectos" className="ultimo"> Últimos Trabajos </a>
      </div>
    </div>
  );
};

export default Home;
