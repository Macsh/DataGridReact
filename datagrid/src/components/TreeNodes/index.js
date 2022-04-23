import React, {useContext, useState} from "react";
import { StatesReadContext } from "../StatesContext";
import { StatesWriteContext } from "../StatesContext";
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const TreeNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);
    const [dataReadStates, setDataReadStates] = useContext(StatesReadContext);
    const [dataWriteStates, setDataWriteStates] = useContext(StatesWriteContext);
    const hasChild = node.children ? true : false;

    function addReadStates() {
        const check = getReadStateById(node.id);
        if (check === undefined){
            setDataReadStates([
                ...dataReadStates,
                {"id" : node.id, "checkState" : "checked"}
            ])
        }
        else if (check === 'unchecked'){
            dataReadStates.find((i) => i.id === node.id).checkState = 'checked';
        }
        else if (check === 'checked'){
            dataReadStates.find((i) => i.id === node.id).checkState = 'unchecked';
        }
    }

    const addWriteStates = () => {
        setDataWriteStates([
            ...dataWriteStates,
            {"id" : node.id, "checkState" : "checked"}
        ])
    }

    const getReadStateById = (id) => {
        var checkState = dataReadStates.find((i) => i.id === id);
        if(checkState != undefined){
            return dataReadStates.find((i) => i.id === id).checkState;
        }
    }

    const getWriteStateById = (id) => {
        var checkState = dataWriteStates.find((i) => i.id === id);
        if(checkState != undefined){
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
                        />
                    </div>
                    <div>
                        <Checkbox 
                        isChecked={getWriteStateById(node.id) === "checked"}
                        isInbetween={getWriteStateById(node.id) === "inbetween"}
                        onClick={addWriteStates}
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