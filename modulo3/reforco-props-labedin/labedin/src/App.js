import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="/img/MinhaFoto.png" 
          nome="Adriana" 
          descricao="Oi, eu sou o Adriana. 
          Sou estudante Developer Full stack na Labenu. 
          Está sendo um desafio para mim com muito aprendizado."
        />
        
        <ImagemButton 
          imagem="/img/seta.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem="/img/email.png"
        titulo="E-mail:"
        dado="adrianalima@gmail.com"
        />
         <CardPequeno
        imagem="/img/endereco.png"
        titulo="Endereço:"
        dado="Rua francisco Porto, 380"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="/img/IBGE.png" 
          nome="IBGE" 
          descricao="Fui recenseadora fazendo pesquisas sobre a população." 
        />
        
        <CardGrande 
          imagem="/img/Marisa.png" 
          nome="Lojas marisa S/A" 
          descricao="Atendimento ao cliente e organização da loja." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="/img/facebook.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="/img/instagram.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
