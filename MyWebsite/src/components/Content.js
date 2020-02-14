import React from "react"
import "../assets/layout.css"

class Content extends React.Component{
    render(){
        return(
            <div className="Content">
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

                    <div class="offers">
                        <img src="https://img.icons8.com/cotton/64/000000/linux-client.png"/>
                        <b id="header">Optymalizacja stron WWW</b>
                    </div>
                
                    <div class="offers">
                        <img src="https://img.icons8.com/ios/50/000000/channel-mosaic.png"/>
                        <b id="header">Aktualizacja layoutów strony</b>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content