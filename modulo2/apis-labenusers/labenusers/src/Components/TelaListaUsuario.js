 import React from 'react';
 import axios from 'axios';
 import styled from 'styled-components'

const CardUsuario = styled.div`
display: flex;
border: 1px solid black;
padding: 10px;
margin: 10px;
justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {
    state = {
       usuarios: []
    }

    componentDidMount = () => {
        this.getAllUsers();
    };
    
    getAllUsers = async() => {
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        // const request = axios.get(
         
        //    {             headers: {
        //        Authorization: "Adriana-Lima-Freire"
        //      }
        //   }
        //  );
        //  request
        //    .then((response) => {
        //      //console.log(response.data.result.list);
        //     this.setState({usuarios: response.data.});
        //    })
        //   .catch((error) => {
        //      alert(error.message)
        //      // console.log(error.message);
        //    });
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: "Adriana-Lima-Freire"
                }
            })

            this.setState({usuarios: response.data})
        } catch (error) {
            alert("Ocorreu um erro, tente novamente")
        }
    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.del(url, {
            headers: {
                Authorization: "Adriana-Lima-Freire"
            }
        })
            .then((response) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.getAllUsers()
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }
      render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deleteUser(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.cadastrarUsuario}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
        
      }
}
    

    

    