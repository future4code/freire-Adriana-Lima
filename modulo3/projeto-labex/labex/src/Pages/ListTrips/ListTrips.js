import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToapplicationform } from "../../Routes/Coordinator";
import { ButtonDiv } from "./styled";



const ListTrips = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()

    // useEffect(() => {
    //     getTrips()
    // }, [navigate])

    // const getTrips = () => {
    //     axios.get(urlTrip)
    //     .then((response) => {
    //         setTrips(response.data.trips)
    //         console.log(response.data.trips)
    //     })
    //     .cath((error) => {
    //         console.log(error.mensage)
    //     })
    // }

    return (
        <div>
            <h1>Pacotes de Viagens</h1>
            <ButtonDiv>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToapplicationform(navigate)}>Inscreva-se</button>
            </ButtonDiv>
        </div>
    )
}
export default ListTrips;