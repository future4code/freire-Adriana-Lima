import React, { useState } from 'react'
import { AppContainer, Text, DivContainer } from './AppStyled'
import Header from './Components/Header/Header'


function App () {
  
  const [inputUsuario, setInputUsuario] = useState()
  const [inputMensagem, setInputMensagem] = useState()
  const [mensagens, setMensagens] = useState([
    {
      usuario: "",
      mensagem: ""
    }
  ])

    const enviarMensagem = () => {
      const novaMensagem = {
        usuario: inputUsuario,
        mensagem: inputMensagem
      }
      const copiaNovaMensagem = [...mensagens, novaMensagem]
        setMensagens(copiaNovaMensagem)
        setInputUsuario("")
        setInputMensagem("")
      }
     
    const onChangeUsuario = (event) => {
      setInputUsuario(event.target.value)
    }
    const onChangeMensagem = (event) => {
      setInputMensagem(event.target.value)
    }

    const listaDeMensagem = mensagens.map((mensagem, index) => {
      return (
        <p key={index}>
          <h3>{mensagem.usuario}</h3>
          {mensagem.mensagem}
        </p>
        
      )
    }) 


  return (
    <AppContainer>
      <Header/>
      
      <Text>
        {listaDeMensagem}
      </Text>
      
      <DivContainer>   
        <input
          placeholder='Usuário'
          value={inputUsuario}
          onChange={onChangeUsuario}
        />
        <input
          placeholder='Mensagem'
          value={inputMensagem}
          onChange={onChangeMensagem }
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </DivContainer>
    
    </AppContainer>
  );
}

export default App;