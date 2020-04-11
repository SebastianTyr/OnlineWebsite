import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">

                <form className="contactform">
                    <div className="emailform">
                        <label id="emailLabel">E-mail</label>
                        <input id="email"placeholder="E-mail"></input>
                    </div>

                    <div className="contentform">
                        <label id="contentLabel">Treść</label>
                        <input id="content"></input>
                    </div>
                    <button id="submit">Wyślij</button>
                </form>

            </div>
        )
    }
}
export default Contact