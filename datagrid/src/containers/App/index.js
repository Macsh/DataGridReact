import React, {useState, useEffect} from "react";
import { StatesReadContext, StatesWriteContext } from "../../components/Contexts";
import { Tree } from '../../components/Tree';
import { DisplayPermissions } from "../../components/DisplayPermissions";
import datas from "../../assets/Sectorisation.json";
import './index.css';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [dataReadStates, setDataReadStates] = useState(defaultItemReadStates);
  const [dataWriteStates, setDataWriteStates] = useState(defaultItemWriteStates);

  return (
    <StatesReadContext.Provider value={[dataReadStates, setDataReadStates]}>
      <StatesWriteContext.Provider value={[dataWriteStates, setDataWriteStates]}>
        <div className="d-tree border border-dark m-auto mt-5 mb-5"  onClick={e => setClicked(v => !v)}>
          <div className="d-flex d-top border-bottom border-dark justify-content-between">
            <span>Stores</span>
            <div className="d-flex d-top-box justify-content-between">
              <div>Read</div>
              <div>Write</div>
            </div>
          </div>
          <Tree datas={datas.data.roots} />
          <div className="border-top border-dark">
          <DisplayPermissions />
          </div>
        </div>
      </StatesWriteContext.Provider>
    </StatesReadContext.Provider>
  );
}

export default App;
