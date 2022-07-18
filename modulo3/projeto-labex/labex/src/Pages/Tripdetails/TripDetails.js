import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome } from "../../Routes/Coordinator";

const TripDetails = () => {
    const navigate = useNavigate()

    

    return (
        <div>
            <h1>Detalhes da Viagem</h1>
            
            <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
            <h3>Candidatos Pendentes</h3>
            <h3>Candidatos Aprovados</h3>
        </div>
    )
}
export default TripDetails;