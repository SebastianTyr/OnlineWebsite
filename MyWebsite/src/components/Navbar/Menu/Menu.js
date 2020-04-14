import React from "react";
import logo from "../../../Assets/logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./menu.scss";

const Menu = props => (
    <div>
    <nav className="menu">
        <div><DrawerToggleButton click={props.drawerToggleClickHandler}/></div>
        <div><a href=""><img src={logo} alt="" id="logo"/></a></div>
        <ol id="nav-list">
            <li id="nav-list-element">O mnie</li>
            <li id="nav-list-element">Co oferuję</li>
            <li id="nav-list-element">Projekty</li>
            <li id="nav-list-element">Kontakt</li>
            <li id="nav-list-element">Źródła</li>
        </ol>
    </nav>
</div>
);

export default Menu

//===========NAVBAR ROUTING TODO===========//
/*
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "../Content";
import Contact from "../Contact";
import Sources from "../Sources";
*/

/*
<Router>
<ol id="nav-list">
    <li><Link to={'/'} id="nav-list-element">O mnie</Link></li>
    <li><Link to={'./Content'} id="nav-list-element">Co oferuję</Link></li>
    <li><Link to={'#'} id="nav-list-element">Projekty</Link></li>
    <li><Link to={'./Contact'} id="nav-list-element">Kontakt</Link></li>
    <li><Link to={'./Sources'} id="nav-list-element">Źródła</Link></li>
</ol>

<Switch>
    <Route path="/content" component={Content} />
    <Route path="/contact" component={Contact} />
    <Route path="/sources" component={Sources} />
</Switch>
</Router>
*/