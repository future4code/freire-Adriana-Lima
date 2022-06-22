import React from 'react';
import axios from 'axios';

class Cadastro extends React.Component {

    state = { 
        usuario: [],
    inputName: "",
    inputEmail: ""
    };

    onChangeInput = (event) => {
        this.setState({ inputName: event.target.value })
      };

      onChangeInput = (event) => {
        this.setState({ inputEmail: event.target.value })
      };

      createUsers = (event) => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        };

        const request = axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: {
                Authorization: "Adriana-Lima-Freire"
              }
            }
          );
      
          request
            .then((response) => {
            //   console.log(response);
              alert(response.data)
              this.props.getAllUsers()
            })
            .catch((error) => {
            //   console.log(error.message);
            alert(error.message)
            });

            this.setState ({
            usuario: ({name: this.state.inputName}, {email: this.state.inputEmail}),
        })
        };
      
       
    render() {
      return (
        <div>
           <h1>Cadastre-se</h1>

<hr />

<section>
  
  <input
    type="Nome"
    value={this.state.inputName}
    onChange={this.onChangeInputName}
    placeholder="Digite seu nome"
  />

  <input
    type="Email"
    value={this.state.inputEmail}
    onChange={this.onChangeInputEmail}
    placeholder="Digite seu E-mail"
  />

  <button onClick={this.verLista}>Enviar</button>
</section>
<hr />



        </div>
      )
    }
}
    
export default Cadastro;
    