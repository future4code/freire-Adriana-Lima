import React from 'react'

class Etapa2 extends React.Component {
    render () {
    return (
        <div className="Etapa2">

          <h2> Etapa 2 - Informações do Ensino Superior</h2>

        <div>
           <p>Qual o curso?</p>
           <input value=""/>
      
           <p>Qual a unidade de ensino?</p>
           <input value=""/>
        </div>

        <br/>

        <button>Próxima Etapa</button>
  
        </div>

        
    );
  }
  }
  
  export default Etapa2;