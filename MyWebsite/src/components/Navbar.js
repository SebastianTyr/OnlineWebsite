import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import logo from "../assets/logo.png"
import Sources from "./Sources"
import App from "../App"
import "../assets/layout.css"

class Navbar extends React.Component{
    render(){
        return(
        <Router>
            <div>
                <nav className="menu">
                    <Link to="../App"><img src={logo} alt="" id="logo"/></Link>
                    <ol>
                        <li id="navlist"><Link to="../App">O mnie</Link></li>
                        <li id="navlist"><Link>Co oferuję</Link></li>
                        <li id="navlist"><Link>Projekty</Link></li>
                        <li id="navlist"><Link>Kontakt</Link></li>
                        <li id="navlist"><Link to="../sources">Źródła</Link></li>
                    </ol>
                </nav>
            </div>
            <Switch>
                <Route path="../App"><App/></Route>
                <Route path="../App"><App/></Route>
                <Route path="../sources"><Sources/></Route>
            </Switch>
        </Router>
        /*<div>
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
        </div>*/
        )
    }
}
export default Navbar