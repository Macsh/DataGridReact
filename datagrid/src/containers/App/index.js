import React, {useState, useEffect} from "react";
import { StatesReadContext, StatesWriteContext } from "../../components/StatesContext";
import { Tree } from '../../components/Tree';
import { Permissions } from "../../components/Permissions";
import datas from "../../assets/Sectorisation.json";
import './App.css';

function App() {

  const array = datas.data.roots;
  const defaultItemReadStates = [];
  const defaultItemWriteStates = [];
  const [clicked, setClicked] = useState(false);

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
        <div className="App"  onClick={e => setClicked(v => !v)}>
          <Tree datas={datas.data.roots} />
          <Permissions />
        </div>
      </StatesWriteContext.Provider>
    </StatesReadContext.Provider>
  );
}

export default App;
