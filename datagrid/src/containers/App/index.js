import React, {useState} from "react";
import './App.css';
import datas from "../../assets/Sectorisation.json";
import { Tree } from '../../components/Tree';
import { StatesReadContext } from "../../components/StatesContext";
import { StatesWriteContext } from "../../components/StatesContext";
import { Permissions } from "../../components/Permissions";

function App() {
  const [dataReadStates, setDataReadStates] = useState([]);
  const [dataWriteStates, setDataWriteStates] = useState([]);

  return (
    <StatesReadContext.Provider value={[dataReadStates, setDataReadStates]}>
      <StatesWriteContext.Provider value={[dataWriteStates, setDataWriteStates]}>
        <div className="App">
          <Tree datas={datas.data.roots} />
        </div>
        <Permissions />
      </StatesWriteContext.Provider>
    </StatesReadContext.Provider>
  );
}

export default App;
