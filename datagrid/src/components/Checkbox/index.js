import React from "react";
import './index.css';

export const Checkbox = ({ isChecked, isInbetween, onClick = () => {} }) => {

    return(
        <span onClick={onClick} className={`checkbox ${ isChecked ? "isChecked" : ""} ${ isInbetween ? "isInbetween" : ""}`}></span>
    );
};