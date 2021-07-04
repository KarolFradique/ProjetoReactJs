import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Desafios from './Avaliacao/desafios'
import Propiedade from './Avaliacao/propiedade'
import Numero from './Avaliacao/numeros'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function index (){
  const nome = "Karoliny Fradique"
  const nota = 10
  const min = 1
  const max = 10
  return(
   <div>
     <div>
       <Desafios></Desafios>
     </div>
   <div className="linha">
      <Propiedade nome={nome} nota={nota}> </Propiedade>
         </div>
    <div className="linha">
       <Numero min={min} max={max}> </Numero>
    </div>
    
    </div>
  )
}

export default index