import React from "react";
import { useNavigate } from "react-router-dom";

const TripDetails = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/Admin')
    }

    return (
        <div>
            <h1>Detalhes da Viagem</h1>
            
            <button onClick={goBack}>Voltar</button>
            <h3>Candidatos Pendentes</h3>
            <h3>Candidatos Aprovados</h3>
        </div>
    )
}
export default TripDetails;