import './App.css';
import Main from './components/useCallback/Main';
import { Principal } from './components/useContext/Principal';
import AvisaRender from './components/useRef/AvisaRender';
import { DataProvider } from './components/useReducer/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        {/* <Main /> */}
        {/* <AvisaRender /> */}
        <Principal />
      </div>
    </DataProvider>
  );
}

export default App;
