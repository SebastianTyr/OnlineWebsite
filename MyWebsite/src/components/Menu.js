import React from "react";
import logo from "../Assets/logo.png";

class Navbar extends React.Component{
    render(){
        return(
        <div>
            <nav class="menu">
            <a href=""><img src={logo} alt="" id="logo"/></a>
                <ol>
                    <li id="navlist"><a href="">O mnie</a></li>
                    <li id="navlist"><a>Co oferuję</a></li>
                    <li id="navlist"><a>Projekty</a></li>
                    <li id="navlist"><a>Kontakt</a></li>
                    <li id="navlist"><a href="">Źródła</a></li>
                </ol>
            </nav>
        </div>
        )
    }
}
export default Navbar