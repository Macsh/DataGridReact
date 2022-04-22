import './App.css';
import datas from "../../assets/Sectorisation.json";
import { Sectorisation } from '../../components/Sectorisation';

function App() {
  return (
    <div className="App">
      <Sectorisation datas={datas.data.roots} />
    </div>
  );
}

export default App;
