import React, {useState, useEffect, useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import './index.css';

export const Checkbox = ({ type, id, onClick = () => {} }) => {

    const [refreshState, setRefreshState] = useState(false);
    const [checked, setChecked] = useState(false);
    const [inbetween, setInbetween] = useState(false);
    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);

    const isChecked = () => {
        if(type === 'read'){
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
        else {
            if(getWriteStateById(id) === "checked"){
                setChecked(true);
            }
            else {
                setChecked(false);
            }
            if(getWriteStateById(id) === "inbetween"){
                setInbetween(true);
            }
            else {
                setInbetween(false);
            }
        }
    }

    const getReadStateById = (id) => {
        var checkState = dataReadStates.find((i) => i.id === id);
        if(checkState !== undefined){
            return dataReadStates.find((i) => i.id === id).checkState;
        }
    }

    const getWriteStateById = (id) => {
        var checkState = dataWriteStates.find((i) => i.id === id);
        if(checkState !== undefined){
            return dataWriteStates.find((i) => i.id === id).checkState;
        }
    }

    useEffect( () => {
    }, [refreshState]);

    return(
        <span onClick={function(e){onClick(); setRefreshState(current => !current); isChecked();}} className={`checkbox ${ checked ? "isChecked" : ""} ${ inbetween ? "isInbetween" : ""}`}></span>
    );
};