import React, {Fragment,useState} from 'react'
import { calcularTotal} from '../helpers'
import Resultado from './Total'
const Form = (props) => {

    const {cantidad,guardarCantidad, plazo, guardarPlazo, guardarTotal,guardarCargando } = props;
// Definir state

const [error, guardarError] = useState(false);
    // Cuando el user hace submit
    const calcularPrestamo = e =>{
        e.preventDefault();


        // Validar

        if (cantidad === 0 || plazo === '' || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);
        // Habilitar Spinner

        guardarCargando(true)

        setTimeout(() =>{


            // Cotizacion
            const total = calcularTotal(cantidad,plazo);
            
    
            // una vez calculado guardamos 
    
            guardarTotal(total)


            guardarCargando(false)
        },3000)

        // Deshabilitar spinner
        

        

    }
    return ( 
        <Fragment>


            <form
            onSubmit = {calcularPrestamo}
            >
              <div className="row">
                  <div>
                      <label>Cantidad Prestamo</label>
                      <input 
                          className="u-full-width" 
                          type="number" 
                          placeholder="Ejemplo: 3000" 
                          onInput = {e => guardarCantidad(parseInt(e.target.value)) }
                      />
                  </div>
                  <div>
                      <label>Plazo para Pagar</label>
                      <select 
                          className="u-full-width"
                          onInput = {e => guardarPlazo(parseInt(e.target.value)) }
                          
                      >
                          <option value="">Seleccionar</option>
                          <option value="3">3 meses</option>
                          <option value="6">6 meses</option>
                          <option value="12">12 meses</option>
                          <option value="24">24 meses</option>
                          
                      </select>
                  </div>
                  <div>
                      <input 
                          type="submit" 
                          value="Calcular" 
                          className="button-primary u-full-width" 
                      />
                  </div>
              </div>
      </form>
    {(error) ?<p className="error"> Todos los campos son obligatorios</p> : null }
        
        </Fragment>
     );
}
 
export default Form;