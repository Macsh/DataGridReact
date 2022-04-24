import React, {useContext, useState} from "react";
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";
import { getStateById } from "../AddStates";
import { StatesWriteContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const TreeWriteCheckbox = ({node, onClick = () => {} }) => {

    const hasChild = node.children ? true : false;
    const [nodeVisible] = useState(false);
    const [dataWriteStates] = useContext(StatesWriteContext);

    return (
        <li className="d-tree-node border-0">
                <div>
                    <Checkbox 
                    onClick={() => onClick(node)}
                    isChecked={getStateById(node.id, dataWriteStates) === 'checked'}
                    isInbetween={getStateById(node.id, dataWriteStates) === 'inbetween'}
                    />
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