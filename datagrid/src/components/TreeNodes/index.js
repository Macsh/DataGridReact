import React, {useContext, useState} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const TreeNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);
    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);
    const hasChild = node.children ? true : false;

    function addReadStates() {
        const check = getReadStateById(node.id);
        if (check === 'unchecked'){
            dataReadStates.find((i) => i.id === node.id).checkState = 'checked';
        }
        else if (check === 'checked'){
            dataReadStates.find((i) => i.id === node.id).checkState = 'unchecked';
        }
    }

    const addWriteStates = () => {
        const check = getWriteStateById(node.id);
        if (check === 'unchecked'){
            dataWriteStates.find((i) => i.id === node.id).checkState = 'checked';
        }
        else if (check === 'checked'){
            dataWriteStates.find((i) => i.id === node.id).checkState = 'unchecked';
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

    return (
        <li className="d-tree-node border-0">
            <div className="d-flex " key={node.id} id={node.id}>
                <div className="d-flex" onClick={e => setNodeVisibility(v => !v)}>
                {hasChild && node.children.length > 0 && (
                    <div className={`d-inline d-tree-toggler ${ nodeVisible ? "active" : ""}`}>
                        + &nbsp;
                    </div>
                )}

                    <div className="col d-tree-head">
                        {node.name}
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <Checkbox 
                        onClick={addReadStates}
                        id={node.id}
                        type='read'
                        />
                    </div>
                    <div>
                        <Checkbox 
                        onClick={addWriteStates}
                        id={node.id}
                        type='write'
                        />
                    </div>
                </div>
            </div>
            

            {
                hasChild && nodeVisible && <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <Tree datas={node.children} />
                    </ul>
                </div>
            }
        </li>
    )
}