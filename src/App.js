import React, {useState} from 'react'
import Header from './Components/Header';
import Form from './Components/Form';
import Mensaje from './Components/Mensaje';
import Total from './Components/Total';
import Spinner from './Components/Spinner';
function App() {

  const [cantidad,guardarCantidad] = useState(0);
  const [plazo,guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0)
  const [cargando, guardarCargando] = useState(false)

  let componente;

  if(cargando){
    componente = <Spinner/>;
  } else if (total === 0 ) {
    componente = <Mensaje/>
  }else if (isNaN(cantidad)){
    componente = <Mensaje/>
  }
  else {
    componente = <Total
      plazo={plazo}
      cantidad={cantidad}
      total={total}

    
    />
  }
  return (
    
    <div className="App">
      <Header
        titulo ="Prestamos Online"
        
      />

      <div className="container">
        <Form 
        
          cantidad ={cantidad}
          guardarCantidad ={guardarCantidad}
          plazo ={plazo}
          guardarPlazo ={guardarPlazo}
          total ={total}
          guardarTotal ={guardarTotal}
          guardarCargando ={guardarCargando}
        />
        <div className="mensajes" >

        {componente}
        </div>

      </div>


      
    </div>
  );
}

export default App;
