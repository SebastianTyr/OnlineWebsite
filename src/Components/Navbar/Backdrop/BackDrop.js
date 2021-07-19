import React from "react";
import "./backdrop.scss";

const bakcdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default bakcdrop