/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const ItemCount = (props) => {

    const [count,setCount] = useState(0)

    //Funciones de sumar uno con un maximo de sock
    const addOne = () => {
        if(count < props.stock) {
            setCount(count + 1)
        }
    }

    //Funcion de restar uno al contador seteando un minimo
    const disOne = () => {
        if(count > 0) {
            setCount(count - 1)
        }

    }

    //Funcion agregar X cantidad de productos
    const onAdd = () => {
        console.log(count);
    }


    return(
        
        <div className='box-count'>
            <div className='box-count-children'>
            <button onClick={addOne}>+</button>
            <p>{count}</p>
            <button onClick={disOne}>-</button>
            </div>
            <button onClick={onAdd}>On Add</button>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemCount
