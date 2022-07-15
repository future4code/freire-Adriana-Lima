import React, { useState, useForm } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/Coordinator";
import { Button } from "./styled";



const CreateTrip = () => {
    // const {form, onchange, clear} = useForm({})
    // const [name, setName] = useState('');
    // const [planet, setPlanet] = useState('');
    // const [date, setDate] = useState('');
    // const [description, setDescription] = useState('');
    // const [durationInDays, setDurationInDays] = useState('');
    const navigate = useNavigate()

    const onClickCreate = (event) => {
        event.preventDefault()
        //CreateTrip(form, clear)
    }
  
    return (
        <div>
            <h2>Criar Viagem</h2>
            <form onSubmit={onClickCreate}>
            <input
            placeholder={'Nome'} 
            name={'name'} 
            //value={form.name}            
            //onChange={onChange}
            pattern={"^.{4,}$"}
            title={"O nome da viagem deve ter no mínimo 4 caractere"}
            />
            <select placeholder={"Planeta"} name={"planet"} required>
                <option value disabled selected>Escolha um planeta</option>   
                <option value="Mercurio">Mercúrio</option> 
                <option value="Venus">Vênus</option> 
                <option value="Terra">Terra</option> 
                <option value="Marte">Marte</option> 
                <option value="Jupiter">Júpiter</option> 
                <option value="Saturno">Saturno</option> 
                <option value="Urano">Urano</option> 
                <option value="Netuno">Netuno</option> 
                 
            </select>
            <input
            placeholder={'Data'}
            type={"date"}
            name={'date'}
            //value={form.date}
            //onChange={onchange}
            required 
            //min={stringToday}     
            />
            <input
            placeholder={'Descrição'}
            name={'description'} 
            //value={form.description}                     
            //onChange={onChange}
            required
            pattern={"^.{30,}$"}
            title={"O nome dve ter no mínimo 30 carateres"}
            />
            <input
            placeholder={'Duração em dias'} 
            type={'number'}
            name={'durationInDays'}   
            //value={form.durationInDays}        
            //onChange={onChange}
            required
            min={50}
            />
            
            <Button>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button type={"submit"}>Criar</button>
            </Button>
            </form>
        </div>
    )
}
export default CreateTrip;