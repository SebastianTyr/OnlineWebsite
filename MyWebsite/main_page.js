import React, {Component} from "react"
import "./main.css"

class MainPage extends Component{
    render(){
        return(
            <div>
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

                    <div style="clear: both;"></div>

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

                <footer>Copyright &copy 2019</footer>
            </div>
        )
    }
}

export default MainPage