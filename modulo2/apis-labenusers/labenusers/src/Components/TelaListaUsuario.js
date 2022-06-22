// import React from 'react';
// import axios from 'axios';



// class Detalhes extends React.Component {
//     state = {
//        tela: []

//     }

//     componentDidMount = () => {
//         this.getAllUsers();
//       };
    
//       getAllUsers= () => {
//         const request = axios.get(
//           "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
//           {
//             headers: {
//               Authorization: "Adriana-Lima-Freire"
//             }
//           }
//         );
    
//         request
//           .then((response) => {
//             //console.log(response.data.result.list);
//             this.setState({list: response.data.});
//           })
//           .catch((error) => {
//             alert(error.message)
//             // console.log(error.message);
//           });
//       };
//       render() {
//         {this.state.list.map((usuario) => {
//             return <p key={usuario.id}>{usuario.name}</p>;
//           })}
//         return (
//           <div>
//             <button onClick={this.props.cadastrarUsuario}Cadastro de usuário</button>
//             <h1>Lista de Usuários</h1>
           
            
//             <button onClick={this.props.onClickCadastrar}>Trocar de Tela</button>
//           </div>
//         );
//       }
//     }
    

    
//     export default Detalhes;
    