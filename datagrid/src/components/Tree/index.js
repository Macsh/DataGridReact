import React, {useContext, useState} from "react";
import { AddStates } from "../AddStates";
import { StatesReadContext, StatesWriteContext } from "../StatesContext";
import { TreeNodes } from "../TreeNodes";
import { TreeReadCheckbox } from "../TreeReadCheckbox";
import { TreeWriteCheckbox } from "../TreeWriteCheckbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Tree = ({ datas = [] }) => {

    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);
    const [clicked, setClicked] = useState(false);

    const addReadStates = (node) => {
        AddStates(node, dataReadStates);
    }

    const addWriteStates = (node) => {
        AddStates(node, dataWriteStates);
    }


    return (
        <div className="d-tree" onClick={e => setClicked(v => !v)}>
            <ul className="d-tree-container flex-column">
                {datas.map((data) => (
                    <div key={data.id} className="d-flex">
                        <TreeNodes node={data}/>
                            <div>
                            <TreeReadCheckbox node={data} onClick={addReadStates}/>
                            </div>
                            <div>
                            <TreeWriteCheckbox node={data} onClick={addWriteStates}/>
                            </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}