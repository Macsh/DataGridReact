import React, {useState, useEffect} from "react";
import './App.css';
import datas from "../../assets/Sectorisation.json";
import { Tree } from '../../components/Tree';
import { StatesReadContext } from "../../components/StatesContext";
import { StatesWriteContext } from "../../components/StatesContext";
import { Permissions } from "../../components/Permissions";

function App() {

  const array = datas.data.roots;
  const defaultItemReadStates = [];
  const defaultItemWriteStates = [];

  const iteration = (arr) => arr.forEach(element => {
    defaultItemReadStates.push({id: element.id, checkState: 'unchecked'})
    defaultItemWriteStates.push({id: element.id, checkState: 'unchecked'})
    if(element.children.length > 0){
      iteration(element.children);
    }
  });

  useEffect(()=>{
    iteration(array);
  }, [])

  const [dataReadStates, setDataReadStates] = useState(defaultItemReadStates);
  const [dataWriteStates, setDataWriteStates] = useState(defaultItemWriteStates);

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
