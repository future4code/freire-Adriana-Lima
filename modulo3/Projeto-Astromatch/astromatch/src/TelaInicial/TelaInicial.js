import React, {useEffect, useState} from "react";
import axios from "axios"
import styled from "styled-components";

const DivFooter = styled.div`
`



function TelaInicial() {

    const [profiles, setProfiles] = useState({})

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Adriana-Lima-Freire/person`)

        .then((response) => {
           setProfiles(response.data.profile)
        })

        .catch((err) => {
           console.log(err.message);
        })
    }

    useEffect(() => {
        getProfileToChoose()
    }, []);

    const onClickMatch = () => {
        const body = {
            choice: true,
            id: profiles.id
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Adriana-Lima-Freire/choose-person', body,)
           
        .then((response) => {
            console.log(response)
            getProfileToChoose()
        })
        .catch((err) => {
            console.log(err)
        })
    };

    const onClickDescartar = () => {
        const body = {
            choice: false,
            id:profiles.id      
     }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Adriana-Lima-Freire/choose-person', body)
        .then((response) => {
            console.log(response)
            getProfileToChoose()
        })
        .catch(err => {
            console.log(err);
        })
     };

    return (
        <DivFooter>
            <button id='excluir' onClick={onClickDescartar}></button>
            <button id='match' onClick={onClickMatch}></button>
        </DivFooter>
    )
}
export default TelaInicial;