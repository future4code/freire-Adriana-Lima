import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1a9695;
`

const DivInput = styled.div`
display: flex;
margin: 10px;
padding: 10px;

input {
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  font-size: 15px;
  
}

button {
  border-radius: 10px;
  font-size: 15px;
  background-color: red;
  color: white;

}
`

function App() {
  const [inputNomeUsuario, setInputNomeUsuario] = useState()
  const [inputFotoUsuario, setInputFotoUsuario] = useState()
  const [inputFotoPost, setInputFotoPost] = useState()
  const [posts, setposts] = useState(
    [
    {
      nomeUsuario:"Alessandra",
      fotoUsuario:"/img/perfil1.jpg",
      fotoPost:"/img/viagem.jpg"
    },
    {
      nomeUsuario:"paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
    },
    {
      nomeUsuario:"Felipe",
      fotoUsuario:"/img/perfil2.jpg",
      fotoPost:"/img/cachorro.jpg"
    }
  ]
  )

  const adicionarPost = () => {
    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
    } 
    const novosPosts = [...posts, novoPost]
    setposts(novosPosts)
  }

  const onChangeInputNomeUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }
  const onChangeInputFotoUsuario = (event) => {
    setInputFotoUsuario(event.target.value)
  }
  const onChangeInputFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }
    

  const listaDePost = posts.map((post, index) => {
    return (
      <Post keys={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })
  return (
    <MainContainer>
      
      <DivInput>
        <input
          placeholder="Nome do Usuário"
          value={inputNomeUsuario}
          onChange={onChangeInputNomeUsuario}
          />
        <input
          placeholder="Foto do Usuário"
          value={inputFotoUsuario}
          onChange={onChangeInputFotoUsuario}
        />
        <input
          placeholder="Foto do Post"
          value={inputFotoPost}
          onChange={onChangeInputFotoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </DivInput>
      <div>
      {listaDePost}
      </div>
    </MainContainer>
  );
}

export default App;
