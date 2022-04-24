import React, {useState, useEffect, useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import './index.css';

export const Checkbox = ({ isChecked, isInbetween, onClick = () => {} }) => {

    // const [refreshState, setRefreshState] = useState(false);
    // const [checked, setChecked] = useState(false);
    // const [inbetween, setInbetween] = useState(false);
    // const [dataReadStates] = useContext(StatesReadContext);
    // const [dataWriteStates] = useContext(StatesWriteContext);

    // const isChecked = () => {
    //     var arr;
    //     if(type === 'read'){
    //         arr=dataReadStates;
    //     }
    //     else {
    //         arr=dataWriteStates;
    //     }
    //     if(getStateById(id, arr) === "checked"){
    //         setChecked(true);
    //     }
    //     else {
    //         setChecked(false);
    //     }
    //     if(getStateById(id, arr) === "inbetween"){
    //         setInbetween(true);
    //     }
    //     else {
    //         setInbetween(false);
    //     }
    // }

    // const getStateById = (id, arr) => {
    //     var checkState = arr.find((i) => i.id === id);
    //     if(checkState !== undefined){
    //         return arr.find((i) => i.id === id).checkState;
    //     }
    // }

    // useEffect( () => {
    //     isChecked();
    // }, [refreshState]);

    return(
        <span onClick={onClick} className={`checkbox ${ isChecked ? "isChecked" : ""} ${ isInbetween ? "isInbetween" : ""}`}></span>
        // <span onClick={function(e){onClick(); setRefreshState(current => !current);}} className={`checkbox ${ checked ? "isChecked" : ""} ${ inbetween ? "isInbetween" : ""}`}></span>
    );
};