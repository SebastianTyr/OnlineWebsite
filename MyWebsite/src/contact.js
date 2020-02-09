import React from "react"
import Menu from "./assets/navbar"
import "./Layout.css"

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <Menu></Menu>
                <form>
                    <label id="emailLabel">E-mail</label>
                    <input id="email"placeholder="E-mail"></input>

                    <label id="contentLabel">Treść</label>
                    <input id="content" placeholder="Treść"></input>

                    <button id="submit">
                        Wyślij
                    </button>
                </form>
            </div>
        )
    }
}
export default Contact