import React from "react";
import { useNavigate } from "react-router-dom";
//import useProtectedPage from "../../Hooks/useProtectedPage";
import {goToHomePage, goToCreateTrip, logout} from '../../Routes/Coordinator'
import { ButtonDiv } from "./styled";


const AdminHome = () => {
    //useProtectedPage()
    const navigate = useNavigate()

    // const Logout = () => {
    //     navigate('/Login')
    // }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <ButtonDiv>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={() => logout(navigate)}>Logout</button>
            </ButtonDiv>
        </div>
    )
}
export default AdminHome;