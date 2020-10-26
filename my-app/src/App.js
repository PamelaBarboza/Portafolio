import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./componentes/Contacto";
import Home from "./componentes/Home";
import Proyectos from "./componentes/Proyectos";
import Skill from "./componentes/Skill";
import SobreMi from "./componentes/SobreMi";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <nav className="boxMenuNavegacion">
            <ul className="boxListaMenuNavegacion">
              <li className="portafolio">
                <Link to="/">Portafolio</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#sobreMi">Sobre mi </a>
              </li>
              <li>
                <a href="#skill">Skill </a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
        <switch>
          <Route path="/" exact>
            <Home />
            <SobreMi />
            <Skill />
            <Proyectos />
            <Contacto />
          </Route>
          {/*           <Route path="/contacto"></Route>
          <Route path="/proyectos"></Route>
          <Route path="/skill"></Route>
          <Route path="/sobreMi"></Route> */}
        </switch>
      </div>
    </Router>
  );
}

export default App;
