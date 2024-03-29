import React from "react";
import Card from "@material-ui/core/Card";
import TelaInicial from "./TelaInicial/TelaInicial";
import styled from "styled-components";


const MainContainer = styled(Card)`
  display: block;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 50px;
  text-align: center;
`;

function App () {
  return (
    <>
      <MainContainer>
        <TelaInicial/>
      </MainContainer>
    </>
  );
}

export default App;