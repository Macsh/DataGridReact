import React, {useContext} from "react";
import { StatesContext } from "../StatesContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { TreeNodes } from "../TreeNodes";


export const Tree = ({ datas = [] }) => {

    // if (!idsToRender.length) {
    //     idsToRender = items.filter((i) => !i.parentId).map((i) => i.id);
    // }

    const [dataStates, setDataStates] = useContext(StatesContext);

    const checkStates = () => console.log({dataStates});

    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {datas.map((data) => (
                    <TreeNodes node={data} key={data.id} />
                ))}
            </ul>
            <div>
                <button onClick={() => checkStates()}>Check</button>
            </div>
        </div>
    );
}