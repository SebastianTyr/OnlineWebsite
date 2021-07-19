import React from "react";
import "./sidedrawer.scss";

const sideDrawer = props => {
    let sideDrawerClass = "side-drawer";
    if (props.show) {
        sideDrawerClass = "side-drawer open";
    }
    return (
    <nav className={sideDrawerClass}>
        <ol>
            <li>O mnie</li>
            <li>Co oferuję</li>
            <li>Projekty</li>
            <li>Kontakt</li>
            <li>Źródła</li>
        </ol>
    </nav>);
};

export default sideDrawer;