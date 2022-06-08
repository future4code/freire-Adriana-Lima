import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://cdn.vestcasa.com.br/wp-content/uploads/2021/06/quadro-decorativo-60x50cm-melody-vestcasa1.jpg'}
        />

      <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://cdn.vestcasa.com.br/wp-content/uploads/2021/11/kit-cobre-leito-colcha-queen-3-pecas-roxo-marroquino-vestcasa.jpg'}
        />

      </MainContainer>
    );
  }
}

export default App;
