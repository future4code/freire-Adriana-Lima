import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';


function App() {
  // const [pagina, setPagina] = useState()


  // const mudaPagina = () => {
  //   setPagina()
  // }
  
  return (
    <div>
      
      <Etapa1/>
      <Etapa2/> 
      <Etapa3/> 
      <EtapaFinal/>

    </div>
  );
}

export default App;