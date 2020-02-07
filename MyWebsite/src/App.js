import React from 'react';
import logo from "./images/logo.png"
import './Layout.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav>
          <a href=""><img src={logo} alt="" id="logo"/></a>
          <ol>
            <li><a href="">O mnie</a></li>
            <li><a>Co oferuję</a></li>
            <li><a>Projekty</a></li>
            <li><a>Kontakt</a></li>
            <li><a href="">Źródła</a></li>
          </ol>
        </nav>
    
        <header>Czym się zajmuję ?</header>
    
        <div id="content">
          <div class="offers">
            <img src="https://img.icons8.com/wired/64/000000/code.png"/>
            <b id="header">Tworzenie stron WWW</b>
          </div>
                
          <div class="offers">
            <img src="https://img.icons8.com/nolan/64/000000/code.png"/>
            <b id="header">Tworzenie aplikacji webowych</b>
          </div>

          <div id="clear-styles"></div>

          <div class="offers1">
            <img src="https://img.icons8.com/cotton/64/000000/linux-client.png"/>
            <b id="header">Optymalizacja stron WWW</b>
          </div>
                
          <div class="offers1">
            <img src="https://img.icons8.com/ios/50/000000/channel-mosaic.png"/>
            <b id="header">Aktualizacja layoutów strony</b>
          </div>
        </div>

        <div id="tech">Stack Technologiczny</div>

        <div id="techcont">
          <div id="technologies">
            <img src="https://img.icons8.com/ios-filled/250/000000/c-sharp-logo.png"/>
            <img src="https://img.icons8.com/color/250/000000/css3.png"/>
            <img src="https://img.icons8.com/color/250/000000/html-5.png"/>
            <img src="https://img.icons8.com/nolan/250/000000/js.png"/>
          </div>
        </div>

        <footer>Copyright 2019</footer>
      </div>
    );
  }
}

export default App;
