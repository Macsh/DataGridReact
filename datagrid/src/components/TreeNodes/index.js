import React, {useContext, useState} from "react";
import { StatesContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";

export const TreeNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);
    const [dataStates, setDataStates] = useContext(StatesContext);
    const hasChild = node.children ? true : false;

    // const getStateById = (id) => {
    //     return checkState.find((i) => i.id === id).state;
    // };

    function addStates() {
        setDataStates([
            ...dataStates,
            {"id" : node.id, "checkState" : "checked"}
        ])
    }

    return (
        <li className="d-tree-node border-0">
            <div className="d-flex " key={node.id} id={node.id}>
                <div className="d-flex" onClick={e => setNodeVisibility(v => !v)}>
                {hasChild && node.children.length > 0 && (
                    <div className={`d-inline d-tree-toggler ${ nodeVisible ? "active" : ""}`}>
                        O &nbsp;
                    </div>
                )}

                    <div className="col d-tree-head">
                        {node.name}
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <Checkbox 
                        isChecked={false}
                        isInbetween={false}
                        onClick={addStates}
                        />
                    </div>
                    <div>
                        <Checkbox 
                        isChecked={false}
                        isInbetween={false}
                        onClick={addStates}
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