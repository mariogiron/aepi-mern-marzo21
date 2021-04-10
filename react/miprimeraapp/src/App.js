import './App.css';
import Cronometro from './components/Cronometro';
import CronometroFuncional from './components/CronometroFuncional';
import Despedida from './components/Despedida';
import Formulario from './components/Formulario';
import FormularioPersona from './components/FormularioPersona';
import ProfileCard from './components/ProfileCard';
import Saludo from './components/Saludo';
import Suma from './components/Suma';

function App() {

  const numeros = [3, 5, 61, 43]

  const nombre1 = 'Alicia';

  function onSumaFinalizada(resultado) {
    console.log('Termina la suma', resultado);
  }

  function onCronometroFinalizado() {
    console.log('Termina la cuenta atrás');
  }

  return (
    <div className="App">
      <FormularioPersona />
      {/* <Formulario />
       <Suma numA={numeros[3]} numB={7} sumaFinalizada={onSumaFinalizada} />
      <Suma numA={45} numB={21} />
      <Cronometro cronometroFinalizado={onCronometroFinalizado} />
       <CronometroFuncional />
      <ProfileCard />
      <Saludo nombre={nombre1}>Contenido del saludo 1</Saludo>
      <Saludo nombre="Ana">Contenido del saludo 2</Saludo>
      <Despedida nombre="Ricardo" /> */}
    </div>
  );
}

export default App;
