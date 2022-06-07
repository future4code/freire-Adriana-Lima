import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/MinhaFoto.png'
import IBGE from './img/IBGE.png'
import Marisa from './img/Marisa.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Adriana" 
          descricao="Oi, eu sou a Adriana. Sou desenvolvedora full stack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/3301/3301707.png" 
          texto="Ver mais"
        />
      </div>

        <CardPequeno
          imagem= "https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-512.png"
          nome= "Email:"
          descricao= "adriana-lima_@gmail.com"
        />

        <CardPequeno
          imagem= "https://images-ext-2.discordapp.net/external/vIlZycCbuqGGDNfnwICpCedPQWCNVcMLppdUWC52tFo/https/cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/localization-512.png?width=473&height=473"
          nome= "Endereco:"
          descricao= "Rua Francisco Xavier, 360"
        />


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={IBGE} 
          nome="IBGE" 
          descricao="Recenseadora!" 
        />
        
        <CardGrande 
          imagem={Marisa} 
          nome="Lojas Marisa S/A" 
          descricao="Atendente de Loja." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
