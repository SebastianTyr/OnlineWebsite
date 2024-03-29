import React from 'react';

import Menu from "./Components/Navbar/Menu/Menu";
import SideDrawer from "./Components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "./Components/Navbar/Backdrop/BackDrop"
import Content from "./Components/Content/Content";
import About from './Components/About/About';
import bakcdrop from './Components/Navbar/Backdrop/BackDrop';
import HamburgerMenu from 'react-hamburger-menu';

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

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
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

/* TODO
<HamburgerMenu 
  isOpen={this.state.open}
  menuClicked={this.handleClick.bind(this)}
  width={18}
  height={15}
  strokeWidth={1}
  rotate={0}
  color='black'
  borderRadius={0}
  animationDuration={0.5}
/>
*/

export default App;
