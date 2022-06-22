import React from 'react';
import axios from 'axios';
import TelaCadastro from './Components/TelaCadastro'
import TelaListaUsuario from './Components/TelaListaUsuario'
import './App.css';
 // 1

export default class App extends React.Component {
  state = {
    telaInicial: "cadastro"
  };
 //3
  trocarTela = () => {
    switch (this.state.telaInicial){
      case "cadastro":
        return <TelaCadastro listaDeUsuarios = {this.listaDeUsuarios}/>
      case "lista":
        return <TelaListaUsuario cadastrarUsuario = {this.cadastrarUsuario}/> 
      default:
        return <div>Página não encontrada</div>
    }
  }
 // 2
  cadastrarUsuario = () => {
    this.setState({telaInicial: "cadastro"})
  };

  ListaDeUsuarios = () => {
    this.setState({telaInicial: "lista"})
  };
 // 4
render() {
  
  return (
    <div>
     {this.trocarTela}
    </div>
  )
}
}