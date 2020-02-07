import React from "react"
import logo from "./images/logo.png"
import "./Layout.css"

class Sources extends React.Component{
    render(){
        return(
            <div className="Sources">
                <nav>
                    <a href="./main_page.html"><img src="./images/logo.png" alt="" id="logo"/></a>
                    <ol>
                        <li><a href="./main_page.html">O mnie</a></li>
                        <li><a>Co oferuję</a></li>
                        <li><a>Projekty</a></li>
                        <li><a>Kontakt</a></li>
                        <li><a href="./sources.html">Źródła</a></li>
                    </ol>
                </nav>

                <div>
                    <p>
                        <li id="sources"><a href="https://icons8.com/icon/47729/code">Code icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/43988/code">Code icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/64959/linux-server">Linux Server icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/11487/layout">Layout icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/55205/c-sharp-logo">C Sharp Logo icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/21278/css3">CSS3 icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/20909/html-5">Html 5 icon by Icons8</a></li>
                        <li id="sources"><a href="https://icons8.com/icon/59925/js">JS icon by Icons8</a></li>     
                    </p>
                </div>

                <footer>Copyright &copy 2019</footer>
            </div>
        );
    }
}
export default Sources;