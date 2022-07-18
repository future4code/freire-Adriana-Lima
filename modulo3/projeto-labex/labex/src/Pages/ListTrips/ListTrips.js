import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToapplicationform } from "../../Routes/Coordinator";
import { ButtonDiv, ListContainer } from "./styled";

const urlTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/trips"

const ListTrips = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()

     useEffect(() => {
        getTrips()
    }, [navigate])

    const getTrips = () => {
        // axios.get(urlTrip)
        // .then((response) => {
        //     setTrips(response.data.trips)
        //     console.log(response.data.trips)
        // })
        // .cath((error) => {
        //     console.log(error.mensage)
        // })
    }

    return (
        <ListContainer>
            <h1>Pacotes de Viagens</h1>
            {/* <ListDiv>
                {trips.map((trips) =>{
                    return <Card trips={trips}/>
                })}
            </ListDiv> */}
            <ButtonDiv>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToapplicationform(navigate)}>Inscreva-se</button>
            </ButtonDiv>
        </ListContainer>
    )
}
export default ListTrips;