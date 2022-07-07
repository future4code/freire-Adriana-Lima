import React, { useState } from "react";
import './App.css';
import TelaInicial from "./TelaInicial/TelaInicial";
import TelaMatches from "./TelaMatches/TelaMatches";
import Header from "./Header/Header";
function App() {

  const [tela, setTelas] = useState(true);

  const mudarTela = () => {
    if (tela === true) {
      return <TelaInicial/>
    } else if (tela === false) {
      return <TelaMatches/>
    }
  }
  
  const onClickMudarTela = () => {
    setTelas(!tela)
  };

  return (
    <div>
      <Header onClickMudarTela={onClickMudarTela} tela={tela}/>
      {mudarTela()}
    </div>
  );
}

export default App;
