import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToListTrip, goToLogin} from '../../Routes/Coordinator'
import { ButtonDiv, Home, ImgHome } from './styled'


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Home> 
                     
            <ImgHome src="/img/galaxia2.jpg"/> 
              
            <ButtonDiv>
                <h1>Venham conhecer os nossos melhores <br/> pacotes de viagens espaciais.</h1>
                <button onClick={() => goToListTrip(navigate)}>Pacotes de viagens</button>
                <button onClick={() => goToLogin(navigate)}>Painel Administrativo</button>
            </ButtonDiv>
                       
        </Home>
    )
}
export default HomePage;