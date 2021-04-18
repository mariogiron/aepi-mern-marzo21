import './App.css';

import { useState } from 'react';
import Mensaje from './components/Mensaje';
import Contador from './components/Contador';
import Users from './components/Users';
import Scroll from './components/Scroll';
import CambiaValores from './components/CambiaValores';
import Incremento from './components/Incremento';

function App() {

  const [saludo, setSaludo] = useState('Saludo inicial');

  return (
    <div className="App">
      <Scroll />

      <Mensaje texto={saludo} />
      <button onClick={() => setSaludo((new Date()).toString())}>Pulsa!</button>

      <Contador />

      <Users />

      <CambiaValores />

      <Incremento />

      {/*<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, enim. Doloribus enim corrupti possimus soluta officia necessitatibus perferendis rerum est quos tempora maiores quo sunt error, nesciunt quas obcaecati debitis!</p> */}
    </div>
  );
}

export default App;
