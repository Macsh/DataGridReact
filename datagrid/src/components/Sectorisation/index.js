import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const Sectorisation = ({ datas = [] }) => {
    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {datas.map((data) => (
                    <SectorisationNodes node={data} />
                ))}
            </ul>
        </div>
    );
}

const SectorisationNodes = ({node}) => {

    const [nodeVisible, setNodeVisibility] = useState(false);

    const hasChild = node.children ? true : false;

    return (
        <li className="d-tree-node border-0">
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

            {
                hasChild && nodeVisible && <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <Sectorisation datas={node.children} />
                    </ul>
                </div>
            }
        </li>
    )
}