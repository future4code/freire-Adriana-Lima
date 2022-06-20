import React from 'react';
import './App.css';

class App extends React.Component {
  state= {
    conversa: [],
    inputUsuario:"",
    inputMensagem:""
    
  }



  controlarInputUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }
  
  controlarInputMensagem = (event) => {
    this.setState({inputMensagem: event.target.value})
  }

  adicionarMensagem = () => {
    let novaConversa = {
      nomeUsuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }

    let copiaNovaConversa = [...this.state.conversa, novaConversa]
    this.setState({conversa: copiaNovaConversa})
    this.setState({inputUsuario: ""})
    this.setState({inputMensagem: ""})
  }

  render() {
    let listaDeMensagem = this.state.conversa.map((objeto) => {
      return (
        <div className='elemento'><p>{objeto.nomeUsuario}</p> <p>{objeto.mensagem}</p></div>
      )
        
    })
    return (
      <div className="App">      
        <div className='container'>
          {listaDeMensagem }
        </div>
        <div className='mensagem'>

          <input value={this.state.inputUsuario} onChange={this.controlarInputUsuario} type='text'
          placeholder='Usuario'
          />

          <input value={this.state.inputMensagem} onChange={this.controlarInputMensagem} type="text" 
          placeholder='Mensagem'
          />

          <button onClick={this.adicionarMensagem}>Enviar</button>
        </div>
      

        
      </div>
    );
  }
}

export default App;
