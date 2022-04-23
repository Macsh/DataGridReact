import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { TreeNodes } from "../TreeNodes";

export const Tree = ({ datas = [] }) => {

    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {datas.map((data) => (
                    <TreeNodes node={data} key={data.id} />
                ))}
            </ul>
        </div>
    );
}