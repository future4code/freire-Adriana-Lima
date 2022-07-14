import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    const goToCreateTrip = () => {
        navigate('/CreateTrip')
    }
    const gotoLogin = () => {
        navigate('/Login')
    }
    return (
        <div>
            <h1>Painel Administrativo</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={gotoLogin}>Logout</button>
        </div>
    )
}
export default AdminHome;