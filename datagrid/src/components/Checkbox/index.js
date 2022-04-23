import React, {useState, useEffect, useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import './index.css';

export const Checkbox = ({ id, onClick = () => {} }) => {

    const [refreshState, setRefreshState] = useState(false);
    const [checked, setChecked] = useState(false);
    const [inbetween, setInbetween] = useState(false);
    const [dataReadStates, setDataReadStates] = useContext(StatesReadContext);

    const isChecked = () => {
        if(getReadStateById(id) === "checked"){
            setChecked(true);
        }
        else {
            setChecked(false);
        }
        if(getReadStateById(id) === "inbetween"){
            setInbetween(true);
        }
        else {
            setInbetween(false);
        }
    }

    const getReadStateById = (id) => {
        var checkState = dataReadStates.find((i) => i.id === id);
        console.log(checkState);
        if(checkState != undefined){
            return dataReadStates.find((i) => i.id === id).checkState;
        }
    }

    useEffect( () => {
        console.log(checked);
    }, [refreshState]);

    return(
        <span onClick={function(e){onClick(); setRefreshState(current => !current); isChecked(); }} className={`checkbox ${ checked ? "isChecked" : ""} ${ inbetween ? "isInbetween" : ""}`}></span>
    );
};