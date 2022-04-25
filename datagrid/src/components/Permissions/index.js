import React, {useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Permissions = () => {
    const [dataReadStates, setDataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates, setDataWriteStates] = useContext(StatesWriteContext);

    return (
        <div className="d-flex">
            <div>{dataReadStates.filter(element => element.checkState === 'checked').map(array => (
                <li key={array.id}>{array.id}</li>
            ))}
            </div>
            <div>{dataWriteStates.filter(element => element.checkState === 'checked').map(array => (
                    <li key={array.id}>{array.id}</li>
                ))}
            </div>
        </div>
    )
}