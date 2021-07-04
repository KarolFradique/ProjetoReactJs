import './App.css';
import Desafios from './Avaliacao/desafios'
import Propiedade from './Avaliacao/propiedade'
import Numero from './Avaliacao/numeros'


function App() {
  
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

export default App;
