import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

const expresiones = 'Permite inyectar elementos, se debe poner entre llaves, para hacer referencia a la constante';
const user = {
    name:'Santiago Lobo',
    age: 0,
    country:'CR'
   }

function getInfo(user1){
  return `Mi nombre es ${user1.name}`;
}


//const App = <h1>hola {expresiones}, tengo {user.name}, edad {user.age + 2}. Pintar informacion desde una funcion: {getInfo(user)} </h1>
//ReactDOM.render(App, document.getElementById('root'));




//componente de clases
class FunctionComponenteClases extends React.Component{ 

    constructor(){
        super();
        this.state = {
            cantidad : 0
        } 
    }

    agregar = () => {
        this.setState({
            cantidad : this.state.cantidad + 1
        })
    };

    quitar = () => {
        this.setState({
            cantidad : this.state.cantidad - 1
        })
    }

    render(){
      return(  <div>
            <p>Componentes Clases</p>
            <hr/>
            <h3>{this.props.name} edad {this.props.edad}</h3>
            <div> cantidad { this.state.cantidad} </div>
            <button 
            //no es recomendable utilizar la flecha en el evento, es mejor utilizar funciones
                onClick ={() => {
                    this.setState({
                        cantidad: this.state.cantidad + 1
                    })
                }
            }>Agregar con setState en el evento</button>
            
            <button 
            // el bind lo que permite es llamar la funcion e indicarle que no utilice el this de la funcion si no el this de la clase, se utiliza cada vez que llama al componente
            //onClick = {this.agregar.bind(this)}>, se puede hacer en el onclick o en el constructor que es la mejor forma
            onClick = {this.agregar}>
                Agregar setState mediante una funcion
            </button>

            <button onClick = {this.quitar}>-</button>

        </div>  
      )
    }
}


//COMPONENTES
// Funcion que es un componente, debe comenzar siempre en mayuscula 
// Se puede ser function NombreFuncion o se puede hacer const FunctionComponente = () => { xq se usa babel
// funcion de componente tambien llamados HOOKS
const FunctionComponente = () => {
    return(
        <div>
            <h3>Santi y amor</h3>
            <hr/>
            <p>Los amo</p>
        </div>
    )
}

const FunctionComponenteProps = (props) => 
    (
        <div>
            <p>Props: son solo lectura, este tipo de funcion se llama Componentes Funcionales</p>
            <hr/>
            <h3>{props.name} edad {props.edad}</h3>
            
          
        </div>
    )




const App = () => (

    <div>
        <FunctionComponente/>
        <FunctionComponente>Se puede agregar cualquier elemento</FunctionComponente>

        <FunctionComponenteProps name='papa' edad={29.0}/>
        <FunctionComponenteProps name='mama'/>

        <FunctionComponenteClases  name='papá' edad={29.0}/>    
    </div>
)
ReactDOM.render(<App/>, document.getElementById('root'));


