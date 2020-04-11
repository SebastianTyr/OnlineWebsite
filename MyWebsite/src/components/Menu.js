import React from "react";
import logo from "../Assets/logo.png";

class Navbar extends React.Component{
    render(){
        return(
        <div>
            <nav class="menu">
            <a href=""><img src={logo} alt="" id="logo"/></a>
                <ol id="nav-list">
                    <li id="nav-list-element">O mnie</li>
                    <li id="nav-list-element">Co oferuję</li>
                    <li id="nav-list-element">Projekty</li>
                    <li id="nav-list-element">Kontakt</li>
                    <li id="nav-list-element">Źródła</li>
                </ol>
            </nav>
        </div>
        )
    }
}
export default Navbar