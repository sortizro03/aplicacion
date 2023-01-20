/*#############################################
                 Importaciones
###############################################*/

//Modulos

//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const NavBar = () => {//Funcion constructora


    return (

        <header className='header'>
            <h1>LIBRERIA</h1>
            <CardWidget className='icono-carrito'cantidad="10" />
        </header>

    )

}

/*#############################################
                 Exportacion
###############################################*/
export default NavBar





/*

Padre -> Hijo

Padre (propiedades) -> Hijo

padre{
    propiedad{
        //todos los atributos que escribos en la etiqueta
        saludo = "asd",
        despedida = "asd"
    }
}




*/


