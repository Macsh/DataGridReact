import React, {useContext} from "react";
import { AddStates } from "../ChangeCheckboxStates";
import { StatesReadContext, StatesWriteContext } from "../Contexts";
import { TreeNodes } from "../TreeNodes";
import { TreeReadCheckbox } from "../TreeReadCheckbox";
import { TreeWriteCheckbox } from "../TreeWriteCheckbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Tree = ({ datas = [] }) => {

    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);

    const addReadStates = (node) => {
        AddStates(node, dataReadStates);
    }

    const addWriteStates = (node) => {
        AddStates(node, dataWriteStates);
    }


    return (
        <div>
            <ul className="d-tree-container flex-column">
                {datas.map((data) => (
                    <div key={data.id} className="d-flex justify-content-between">
                        <div className="borders border-bottom"></div>
                        <TreeNodes node={data}/>
                        <div className="d-flex d-checkbox justify-content-between">
                        <TreeReadCheckbox node={data} onClick={addReadStates}/>
                        <TreeWriteCheckbox node={data} onClick={addWriteStates}/>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}