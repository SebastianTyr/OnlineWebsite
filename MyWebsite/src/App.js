import React from 'react';
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import About from './Components/About';

class App extends React.Component {
  render(){
    return (
      <div className="App">

        <Menu/>

        <header>Kim jestem ?</header>

        <About />
    
        <header>Czym się zajmuję ?</header>

        <Content/>

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
