import React from 'react'
import { useNavigate } from 'react-router-dom'
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
/* background-color: write;
color: red; */

`

const HomePage = () => {
    const navigate = useNavigate()

    const goToListTrip = () => {
        navigate('/ListTrip') 
    }
    const goToLogin = () => {
        navigate('/Login') 
    }
    
    return (
        <Home>
            <ImgHome src="/img/galaxia2.jpg"/>
       
            <ButtonDiv>
                <button onClick={goToListTrip}>Pacotes de viagens</button>
                <button onClick={goToLogin}>Painel Administrativo</button>
            </ButtonDiv>
        </Home>
    )
}
export default HomePage;