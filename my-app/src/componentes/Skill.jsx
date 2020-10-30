import React from "react";
import imagenSkill from "../img/perfil.jpg"
import "../componentes/Skill.css"; 
const Skill = () => {
  return (
    <div className="subtitulos">
      <h2>Skill</h2>
      <div id="skill">
        <img className="estiloImg" src={imagenSkill} alt="imagenSkill" />
        <div className="columnaText">
          <ul>
            <li>Perfil</li>
            <br />
            <li>Front-end Dev</li>
            <br />
            <br />
            <li>Tools</li>
            <br />
            <br />
            <li>UI Design</li>
            <br />
            <br />
            <li>Tools</li>
            <li />

            <br />
          </ul>
        </div>
        <div className="columnaText2">
          <ul>
            <li>Front-end Developer</li>
            <br />
            <div className="porcentaje">
              <li className="barBack"></li>
              <li className="barFront"></li>
              <br />
              <li>HTML, CSS, JS, Bootstrap, Firebase, React, Git, GitHub</li>
            </div>
            <br />
            <br />
            <div className="porcentaje">
              <li className="barBack"></li>
              <li className="barFrontUi"></li>

              <br />
              <li>Adobe PS, AI, ID, Figma, InVision</li>
            </div>

            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
