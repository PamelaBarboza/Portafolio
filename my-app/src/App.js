import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from './componentes/Contacto';
import Home from './componentes/Home'
import Proyectos from './componentes/Proyectos';
import Skill from './componentes/Skill';
import SobreMi from './componentes/SobreMi';


function App() {
  return (
    <Router>
      <div className="container">
 <div className="boxMenuNavegacionFijo">

                <nav className="boxMenuNavegacion">
                    <img
                        className="imgLogoMenuNavegacion"
                    />
                    <ul className="boxListaMenuNavegacion">
                        <li>Portafolio</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobreMi">Sobre mi</Link></li>
                        <li><Link to="/skill">Skill</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>                        
                    </ul>
                </nav>
            </div>
        <switch>
          <Route path="/" exact>
            < Home />
          </Route>
          <Route path="/contacto">
            < Contacto />
          </Route>
          <Route path="/proyectos">
            <Proyectos />
          </Route>
          <Route path="/skill">
            < Skill />
          </Route>
          <Route path="/sobreMi">
            <SobreMi />
          </Route>

        </switch>
      </div>
    </Router>
  );
}

export default App;
