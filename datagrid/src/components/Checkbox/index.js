import React from "react";
import './index.css';

export const Checkbox = ({ isChecked = false, isInbetween = false, onClick = () => {} }) => {

    return(
        <span className={`checkbox ${ isChecked ? "isChecked" : ""} ${ isInbetween ? "isInbetween" : ""}`}  onClick={onClick}>
        </span>
    );
};