import React, {useState} from "react";
import { Tree } from "../Tree";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Tree/index.css';

export const TreeNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);
    const hasChild = node.children ? true : false;


    return (
        <li className="d-tree-node border-0">
            <div key={node.id} id={node.id}>
                <div className="d-flex d-tree-head" onClick={e => setNodeVisibility(v => !v)}>
                {hasChild && node.children.length > 0 && (
                    <div className={`d-inline d-tree-toggler ${ nodeVisible ? "active" : ""}`}>
                        + &nbsp;
                    </div>
                )}

                    <div className="col">
                        {node.name}
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