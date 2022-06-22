import React from 'react';
import axios from 'axios';
import Cadastro from './Components/Cadastro'
import Detalhes from './Components/Detalhes'

import './App.css';

class App extends React.Component {
  state = {
    trocarTela: true
  };

  cadastrar = () => {
    this.setState({trocarTela:true})
  };

  verLista = () => {
    this.setState({trocarTela:false})
  };
 
render() {
  let tela;
  if (this.state.trocarTela) {
    tela = <Cadastro onclickLista={this.verLista}/>;
  } else {
    tela = <Detalhes onclickCadastrar={this.cadastrar}/>
  }
  return (
    <div>
     {tela}
    </div>
  )
}
}

export default App;
