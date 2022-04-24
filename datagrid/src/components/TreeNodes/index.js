import React, {useContext, useState} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";
import json from "../../assets/Sectorisation.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const TreeNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);
    const [dataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates] = useContext(StatesWriteContext);
    const hasChild = node.children ? true : false;

    const addReadStates = () => {
        addStates('read');
    }
    const addWriteStates = () => {
        addStates('write');
    }

    const addStates = (type) => {
        var arr;
        if(type === 'read'){
            arr = dataReadStates;
        }
        else {
            arr = dataWriteStates;
        }
        const check = getStateById(node.id, arr);
        if (check === 'unchecked'){
            arr.find((i) => i.id === node.id).checkState = 'checked';
            if(node.children.length > 0){
                goThroughArr(node.children, type, 'checked');
            }
        }
        else if (check === 'checked'){
            arr.find((i) => i.id === node.id).checkState = 'unchecked';
            if(node.children.length > 0){
                goThroughArr(node.children, type, 'unchecked');
            }
        }
    }

    const getStateById = (id, arr) => {
        var checkState = arr.find((i) => i.id === id);
        if(checkState !== undefined){
            return arr.find((i) => i.id === id).checkState;
        }
    }

    function goThroughArr(node, type, state){
        node.forEach(element => {
            if(type === 'read'){
                dataReadStates.find((i) => i.id === element.id).checkState = state;
                if(element.children.length > 0){
                    goThroughArr(element.children, 'read', state);
                }
            }
            else {
                dataWriteStates.find((i) => i.id === element.id).checkState = state;
                if(element.children.length > 0){
                    goThroughArr(element.children, 'write', state);
                }
            }
        })
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