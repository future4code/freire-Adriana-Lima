import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
// 1- state
class App extends React.Component {
  state= {
    post:[
      {
        nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Fernanda',
          fotoUsuario:'https://picsum.photos/50/50?random=1',
          fotoPost:'https://cdn.vestcasa.com.br/wp-content/uploads/2021/06/quadro-decorativo-60x50cm-melody-vestcasa1.jpg'
      },
      {
        nomeUsuario:'Caio',
          fotoUsuario:"https://picsum.photos/50/50?random=2",
          fotoPost:'https://cdn.vestcasa.com.br/wp-content/uploads/2021/11/kit-cobre-leito-colcha-queen-3-pecas-roxo-marroquino-vestcasa.jpg'
      }
    ]
  }
// 4 - adicionarPost e 5 - onChange
  adicionarPost = () =>{
    let novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }
    let copiaListaDePost = [...this.state.post, novoPost]
    this.setState({post: copiaListaDePost})
  }
  onChangeInputNomeUsuario= (nome) => {
    this.setState({nomeUsuario: nome.target.value})
  }
  onChangeInputFotoUsuario= (foto) => {
    this.setState({fotoUsuario: foto.target.value})
  }
  onChangeInputFotoPost= (post) => {
    this.setState({fotoPost: post.target.value})
  }
// 2 - let e return
  render() {
    let listaDePost= this.state.post.map((post)=> {
      return (
        <Post
        nomeUsuario= {post.nomeUsuario}
        fotoUsuario= {post.fotoUsuario}
        fotoPost= {post.fotoPost}/>
      )
    })
    // 3 - input e button
    return (
      <MainContainer>
        {listaDePost}

          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do usuario"}
          />

<input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuario"}
          />

<input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />

          <button onClick= {this.adicionarPost}>Adicionar</button>
      </MainContainer>
    );
  }
}

export default App;
