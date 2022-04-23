import React, {useState} from "react";
import './App.css';
import datas from "../../assets/Sectorisation.json";
import { Tree } from '../../components/Tree';
import { StatesContext } from '../../components/StatesContext';

function App() {
  const [dataStates, setDataStates] = useState([]);

  return (
    <StatesContext.Provider value={[dataStates, setDataStates]}>
      <div className="App">
        <Tree datas={datas.data.roots} />
      </div>
    </StatesContext.Provider>
  );
}

export default App;
