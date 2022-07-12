import React from 'react'
import styled from 'styled-components'

const Home = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
height: 500px;
`
const ImgHome = styled.img`
    display: flex;
    width: 100vw;
    height: 800px;
    position: absolute;
    z-index: 0;
`
const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
width: 70vh;
height: 5vh;
z-index: 2;

`
const Button = styled.button`
background-color: write;
color: red;

`

const HomePage = () => {
    
    return (
        <Home>
            <ImgHome src="/img/galaxia1.jpg"/>
       
            <ButtonDiv>
                <Button onClick="ApplicationForm">Inscreva-se em uma viagem</Button>
                <Button onClick="Login">Painel Administrativo</Button>
            </ButtonDiv>
        </Home>
    )
}
export default HomePage;