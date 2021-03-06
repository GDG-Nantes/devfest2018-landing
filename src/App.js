import React, { Component } from "react";

import logo from './logo-white.png'
import rocket from './rocket.svg'

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <img src={logo} alt="logo"/>
          <div className="landing-actions">
            <a
              href="https://drive.google.com/file/d/1zlMrEN71SfSDPuX4rRqAcLlB5BKjbAki/view?usp=sharing"
              target="NEW"
              className="btn btn-box"
            >
              <img src={rocket} width="80px" alt="download" />
              <span>
                Télécharger le<br/>
                dossier de Sponsoring
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1rb9rLLZp5Y7PTg3uZIaxFdgnP0o_SZtP/view?usp=sharing"
              target="NEW"
            >
              <span>
                English version? Click here.
              </span>
            </a>
          </div>
          <div className="landing-footer">
            <h2>Oct. 18-19 2018</h2>
            <h2>Cité des Congrès, Nantes, France</h2>
            <a href="mailto:bureau@gdgnantes.com">Contactez nous !</a>
            <a href="https://devfest2017.gdgnantes.com" target="_blank" rel="noopener noreferrer">Édition 2017</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
