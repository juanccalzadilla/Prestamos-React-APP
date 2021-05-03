import React from 'react'

const Resultado = ({plazo, cantidad,total}) => {
    return ( 
        <div className="resultado u-full-width">
            <h2>Resumen</h2>
            <p>Cantidad a recibir {cantidad}</p>
            <p>Numero de plazos {plazo}</p>
            <h1> La cantidad a pagar mensual son {(total / plazo).toFixed(2)} durante {plazo} meses</h1>


        </div>
     );
}
 
export default Resultado;