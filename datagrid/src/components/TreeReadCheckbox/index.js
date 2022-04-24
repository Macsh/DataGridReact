import React, {useContext, useState} from "react";
import { Tree } from "../Tree";
import { Checkbox } from "../Checkbox";
import { getStateById } from "../AddStates";
import { StatesReadContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const TreeReadCheckbox = ({node, onClick = () => {} }) => {

    const hasChild = node.children ? true : false;
    const [nodeVisible, setNodeVisibility] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [dataReadStates] = useContext(StatesReadContext);

    return (
        <li className="d-tree-node border-0">
                <div>
                    <Checkbox 
                    onClick={() => onClick(node)}
                    isChecked={getStateById(node.id, dataReadStates) === 'checked'}
                    isInbetween={getStateById(node.id, dataReadStates) === 'inbetween'}
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