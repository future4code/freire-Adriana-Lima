import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'


const Button = styled.div`
margin: 10px;

`

const CreateTrip = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/Admin')
    }
    

    return (
        <div>
            <h2>Criar Viagem</h2>
            <form>
            <input
            placeholder='Nome' 
            name='name'             
            onChange={'handleInput'}
            />
            <select placeholder="Planeta" name="planet" required>
                <option value disabled selected>Escolha um planeta</option>   
                <option value="Mercurio">Mercúrio</option> 
                <option value="Venus">Vênus</option> 
                <option value="Terra">Terra</option> 
                <option value="Marte">Marte</option> 
                <option value="Jupiter">Júpiter</option> 
                <option value="Saturno">Saturno</option> 
                <option value="Urano">Urano</option> 
                <option value="Netuno">Netuno</option> 
                <option value="Plutao">Plutão</option>   
            </select>
            <input
            placeholder={'Data'} 
            type={"date"}
            name={'date'}       
            />
            <input
            text=""
            placeholder={'Descrição'} 
            name={'description'}                      
            onChange={"handleInput"}
            />
            <input
            placeholder={'Duração em dias'} 
            type='number'
            name={'durationInDays'}            
            onChange={'handleInput'}
            />
            </form>
            <Button>
                <button onClick={goBack}>Voltar</button>
                <button type="submit">Criar</button>
            </Button>
        </div>
    )
}
export default CreateTrip;