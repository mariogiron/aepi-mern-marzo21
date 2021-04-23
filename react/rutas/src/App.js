import './App.css';
import React, { Suspense } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

// import About from './components/About';

import Info from './components/Info';
import Menu from './components/Menu';
import Empleado from './components/Empleado';
import { useState } from 'react';

const About = React.lazy(() => import('./components/About'));

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Route path="/" exact render={() => <h3>Ruta raíz</h3>} />
        <Route path="/" exact render={() => <h2>Otra ruta</h2>} />

        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} /> */}

          <Route path="/about">
            <Suspense fallback={<div>Cargando...</div>}>
              <About />
            </Suspense>
          </Route>

          {/* <Route path="/about" render={() => (
            <Suspense fallback={<div>Cargando...</div>}>
              <About />
            </Suspense>
          )} /> */}


          <Redirect from="/sobre" to="/about" />
          {logged && <Route path="/info" component={Info} />}
          <Route path="/empleado/:idEmpleado" component={Empleado} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// http://localhost:3000/
// http://localhost:3000/otro

export default App;