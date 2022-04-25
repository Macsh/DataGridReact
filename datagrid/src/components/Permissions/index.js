import React, {useContext} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Permissions = () => {
    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);

    return (
        <div className="d-permissions d-flex justify-content-around">
            <div>-Read Permissions Recap &#123;
                {dataReadStates.filter(element => element.checkState === 'checked').map(array => (
                <li key={array.id}>"{array.id}";</li>
            ))}
            &#125;</div>
            <div>-Write Permissions Recap &#123;
                {dataWriteStates.filter(element => element.checkState === 'checked').map(array => (
                    <li key={array.id}>"{array.id}";</li>
                ))}
            &#125;</div>
        </div>
    )
}