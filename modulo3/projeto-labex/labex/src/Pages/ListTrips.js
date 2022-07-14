import React from "react";
import { useNavigate } from "react-router-dom";

const ListTrips = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    const goToApplicatioForm = () => {
        navigate('/Form')
    }
    return (
        <div>
            <h1>Pacotes de Viagens</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicatioForm}>Inscreva-se</button>
        </div>
    )
}
export default ListTrips;