import React from 'react';
import Navbar from './componentes/Navbar/Navbar'
import Carrito from './componentes/Carrito/Carrito'


function App() {
  return (
    <div className="App">
      <Navbar navbarLogo={'Quijote'}/>
      <Carrito/>
    </div>
  );
}

export default App;




