import React from 'react'

class Etapa1 extends React.Component {
    render () {
    return (

      <div className="Etapa1">    
        <h2> Etapa 1 - Dados Gerais</h2>
       <div>
        <p>Qual o seu nome?</p>
        <input value=""/>
      
        <p>Qual a sua idade?</p>
        <input value=""/>

        <p>Qual o seu e-mail?</p>
        <input value=""/>

        
        <p>Qual a sua escolaridade?</p>
        <select className='escolaridade'>
        <input value=""/>
        <option value="">Ensino Médio Incompleto</option>
        <option value="">Ensino Médio Completo</option>
        <option value="">Ensino Superior Incompleto</option>
        <option value="">Ensino Superior Incompleto</option>
        </select>

        </div> 

        <br/>

        <button>Próxima Etapa</button>

      </div>
    )
  }
  }
  
  export default Etapa1;
  