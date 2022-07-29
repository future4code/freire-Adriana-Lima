import React, { useState } from 'react'


function FormInput (props) {
    const [usuario, setUsuario] = useState()
    const [mensagem, setMensagem] = useState()

    const onChangeUsuario = (event) => {
        setUsuario(event.target.value)
    }
    const onChangeMensagem = (event) => {
        setMensagem(event.target.value)
    }


  return (
    <div>
      <img src='/img/fundo.jpg'/>
      <input
      placeholder='Usuário'
      value={usuario}
      onChange={onChangeUsuario}
      />
      <input
      placeholder='Mensagem'
      value={mensagem}
      onChange={onChangeMensagem }
      />
      <button onClick={props.enviarMensagem}>Enviar</button>
    </div>
  );
}

export default FormInput;