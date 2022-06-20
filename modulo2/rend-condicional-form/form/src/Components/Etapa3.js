import React from 'react'

class Etapa3 extends React.Component {
    render () {
    return (
     <div className="Etapa3">

        <h2> Etapa 3 - Informações Gerais de Ensino </h2>

     <div>
        <p> 5. Por que você não terminou um curso de graduação? </p>
        <input value=""/>
      
        <p> 6. Você fez algum curso complementar? </p>

        <select className='escolaridade'>

         <input value=""/>
         <option value="">Nenhum</option>
         <option value="">Curso Técnico</option>
         <option value="">Curso de Inglês</option>
        
        </select>

     </div>

        <br/>

        <button>Próxima Etapa</button>

        
     </div>
    );
  }
  }
  
  export default Etapa3;