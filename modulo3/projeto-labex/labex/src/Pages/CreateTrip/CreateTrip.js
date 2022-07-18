import React, { useState } from "react";
//import useProtectedPage from '../../Hooks/useProtectedPage'
import { useNavigate } from "react-router-dom";
//import useForm from '../../Hooks/useForm'
import { goToAdminHome } from "../../Routes/Coordinator";
import axios from 'axios'
import {planets} from './planets'
import { Button } from "./styled";
//OK
const urlCreateTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/trips"

const CreateTrip = () => {
    const navigate = useNavigate()
    
    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [durationInDays, setDurationInDays] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    
    const onChangePlanet = (event) => {
        setPlanet(event.target.value);
    }
    
    const onChangeDate = (event) => {
        setDate(event.target.value);
    }
    
    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    
    const onChangeDurationInDays = (event) => {
        setDurationInDays(event.target.value);
    }
    const createTrip = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        };
        axios
            .post(urlCreateTrip, body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })   
             .then((response) => {
                    setName(response.data.name);
                    setPlanet(response.data.planet);
                    setDate(response.data.date);
                    setDescription(response.data.description);
                    setDurationInDays(response.data.durationInDays);
                    alert('Viagem criada com sucesso!')
             })
             .catch((err) => {
                    console.log(err.message);
                })
        }

    
    return (
        
        <div>
            <h2>Criar Viagem</h2>
           
            <form >
            <input
            placeholder={'Nome'} 
            name={'name'} 
            value={name}            
            onChange={onChangeName}
            pattern={"^.{4,}$"}
            title={"O nome da viagem deve ter no mínimo 4 caractere"}
            required
            />
            <select 
                placeholder={"Planeta"} 
                name={"planet"} 
                Value={planet}
                onChange={onChangePlanet}
                required
            >
                <option></option>
                <option value={""} disabled selected>Escolha um Planeta</option> 
                {planets.map((planet) => {
                    return <option value={planet} key={planet}>{planet}</option>
                })}                  
               
            </select>
            <input
            placeholder={'Data'}
            type={"date"}
            name={'date'}
            value={date}
            onChange={onChangeDate}
            required 
            //min={stringToday}     
            />
            <input
            placeholder={'Descrição'}
            name={'description'} 
            value={description}                     
            onChange={onChangeDescription}
            required
            pattern={"^.{30,}$"}
            title={"O nome dve ter no mínimo 30 carateres"}
            />
            <input
            placeholder={'Duração em dias'} 
            type={'number'}
            name={'durationInDays'}   
            value={durationInDays}        
            onChange={onChangeDurationInDays}
            required
            min={5}
            />
            
            <Button>
                <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
                <button onClick={createTrip}>Criar</button>
            </Button>
            </form>
        </div>
    )
}

export default CreateTrip;


// useProtectedPage()   
    
    
    // const { form, onChange, clear } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
    // const stringToday = new Date().toISOString().split("T")[0]
    
    // const onChangeInput = event => {
    // const { name, value } = event.target
    //   onChange(name, value)

    // const onClickCreate = (event) => {
    //     event.preventDefault()
    //     CreateTrip(form, clear)
    //     const token = window.localStorage.getItem("token")
    //     const [year, month, day] = form.date.split("-")
    
    // const body = {
    //     "name": form.name,
    //     "planet": form.planet,
    //     "date": `${day}/${month}/${year.substring(2, 4)}`,
    //     "description": form.description,
    //     "durationInDays": form.durationInDays
    // }
    // axios.post(url, body, {
    //     headers: {
    //         auth: token
    //     }
    // })
    //     .then(() => {
    //         alert("viagem cadastrada com sucesso!")
    //     })
    //     .catch((error) => {
    //         alert("Não foi possível criar a viagem.")
    //         window.location.reload()
    //     })
    //     //cleanFields()
    // }  