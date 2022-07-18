import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goBack } from "../../Routes/Coordinator";
import {countries} from './countries'
import { DivNav, Form, ButtonForm } from "./styled";

const urlTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/trips"

const ApplicationForm = () => {
    const [form, onChange] = useForm({
      nome: "",
      idade: 0,
      motivo: "",
      profissao: "",
      pais: "",
      viagemEscolhida: null
    })
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate()

    const getTrips = () => {
      // axios.get(urlTrip)
      // .then((response) => {
      //     setTrips(response.data.trips);
      //     console.log(response.data.trips)
      // })
      // .catch((erro) => {
      //     console.log(erro.message);
      // });
  }

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const body = {
        name: form.name,
        age: form.age,
        applicationText: form.reason,
        profession: form.profession,
        country: form.country
    };

    // axios
    // .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/trips/${form.viagemescolhida}/apply`, body)
    // .then((response) => {
    //     alert('Sua inscrição foi realizada com sucesso!')
    // })
    // .catch((err) => {
    //     console.log(err.message)
    //     alert('Não foi possível fazer sua inscrição. Por favor, tente novamente')
    // })   
};


    return (
        <div>
          <DivNav>
            <h1>Inscreva-se para uma viagem</h1>
            <Form onClick={onSubmitForm}>          
            <input 
              placeholder={'Nome'} 
              ame={'name'} 
              value={form.name}
              onChange={onChangeInput}
              required
            />
            <input 
              placeholder={'Idade'} 
              type={'number'} 
              name={'age'} 
              value={form.age}
              onChange={onChangeInput}
              required
              min={18}
            />
            <input              
              placeholder={'Por que sou um bom candidato?'} 
              name={'reason'} 
              value={form.reason}
              onChange={onChangeInput}
              required
              pattern={"^.{30,}$"}
              title={"O texto deve ter no mínimo 30 palavras"}
            />
            <input   
              type={"text"}     
              placeholder={'Profissão'} 
              name={'profession'}
              value={form.profession}             
              onChange={onChangeInput}
              required
            />
            <select 
            placeholder={'Viagem escolhida:'} 
            name={'chosenTrip'}        
            value={form.chosenTrip} 
            onClick={getTrips} 
            onChange={onChangeInput}
            required 
            >
              {trips.map((trip) => {
                return <option value={trip.id}>{trip.name}</option>
          })}

            {/* <option value="" dissabled selected>Escolha uma viagem</option>
            <option value=""></option> 
            <option value=""></option>     
            <option value=""></option>     
            <option value=""></option>     
            <option value=""></option>     
            <option value=""></option>     
            <option value=""></option>               */}
            </select>
            
            <select placeholder={'país'}
              name={'country'} 
              value={form.country}
              onChange={onChangeInput}
              required
            >
                <option value disabled selected>Escolha um país</option> 
                {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                })}
            </select>
            <ButtonForm>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button >Enviar</button>
            </ButtonForm>
            </Form>

            </DivNav>  
        </div>
    )
}
export default ApplicationForm;