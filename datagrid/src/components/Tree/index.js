import React, {useContext, useState} from "react";
import { AddStates } from "../AddStates";
import { StatesReadContext } from "../StatesContext";
import { TreeNodes } from "../TreeNodes";
import { TreeReadCheckbox } from "../TreeReadCheckbox";
import { TreeWriteCheckbox } from "../TreeWriteCheckbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Tree = ({ datas = [] }) => {

    const [dataReadStates] = useContext(StatesReadContext);
    const [clickedRead, setClickedRead] = useState(false);
    const [clickedWrite, setClickedWrite] = useState(false);

    const addReadStates = (node) => {
        AddStates(node, dataReadStates, 'read');
    }

    const addWriteStates = (node) => {
        AddStates(node, dataReadStates, 'write');
    }


    return (
        <div className="d-tree">
            <ul className="d-tree-container flex-column">
                {datas.map((data) => (
                    <div key={data.id} className="d-flex">
                        <TreeNodes node={data}/>
                            <div onClick={e => setClickedRead(v => !v)}>
                            <TreeReadCheckbox node={data} onClick={addReadStates}/>
                            </div>
                            <div onClick={e => setClickedWrite(v => !v)}>
                            <TreeWriteCheckbox node={data} onClick={addWriteStates}/>
                            </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}