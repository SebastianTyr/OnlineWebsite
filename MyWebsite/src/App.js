import React from 'react';

import Menu from "./Components/Navbar/Menu";
import SideDrawer from "./Components/Navbar/SideDrawer";
import Backdrop from "./Components/Navbar/BackDrop"
import Content from "./Components/Content";
import About from './Components/About';
import bakcdrop from './Components/Navbar/BackDrop';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>      
        <Menu drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <header>Kim jestem ?</header>
        <About />
        <header>Czym się zajmuję ?</header>
        <Content/>
        <header id="tech">Stack Technologiczny</header>

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
