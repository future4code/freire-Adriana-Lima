import React from 'react';
import axios from 'axios';

  //1
export default class TelaCadastro extends React.Component {
   // 3
  state = { 
    nome: "",
    email: ""
  };
   //4
    handleNome = (event) => {
        this.setState({nome: event.target.value })
    };

    handleEmail = (event) => {
        this.setState({email: event.target.value })
    };
   // 5
    fazerCadastro = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
        name: this.state.name,
        email: this.state.email
      }
      axios.post(url, body, {
        headers: {
          Authorization: "Adriana-Lima-Freire"
        }
      })

      .then((resposta) => {
        alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome: "", email: ""})

      })

      .catch((erro) => {
        lert(erro.response.data.message)
      })
    }

     // 2 
    render() {
      return (
        <div>
          <button onClick={this.props.listaDeUsuarios}>Lista de Usuários</button>
          <h1>Cadastre-se</h1>

          <input
           placeholder="Nome"
           value={this.state.nome}
           onChange={this.handleNome}
         />
          <input
           placeholder="E-mail"
           value={this.state.email}
           onChange={this.handleEmail}
         />
          <button onClick={this.fazerCadastro}>Cadastrar</button>
        </div>
      )
    }
}   