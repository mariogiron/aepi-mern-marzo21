import './App.css';
import Cronometro from './components/Cronometro';
import CronometroFuncional from './components/CronometroFuncional';
import Despedida from './components/Despedida';
import ProfileCard from './components/ProfileCard';
import Saludo from './components/Saludo';
import Suma from './components/Suma';

function App() {

  const nombre1 = 'Alicia';

  return (
    <div className="App">
      <Suma numA="6" numB="7" />
      <Suma numA="45" numB="21" />
      <CronometroFuncional />
      {/* <Cronometro />
      <ProfileCard />
      <Saludo nombre={nombre1}>Contenido del saludo 1</Saludo>
      <Saludo nombre="Ana">Contenido del saludo 2</Saludo>
      <Despedida nombre="Ricardo" /> */}
    </div>
  );
}

export default App;
