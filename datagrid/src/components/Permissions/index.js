import React, {useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Permissions = () => {
    const [dataReadStates, setDataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates, setDataWriteStates] = useContext(StatesWriteContext);
    const checkReadStates = () => console.log({dataReadStates});
    const checkWriteStates = () => console.log({dataWriteStates});

    return (
        <div>
            <button onClick={() => checkReadStates()}>Check Read</button>
            <button onClick={() => checkWriteStates()}>Check Write</button>
        </div>
    )
}