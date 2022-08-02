import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useForm from '../../Hooks/useForm'
//import useProtectedPage from "../../Hooks/useProtectedPage";
import { goToHomePage } from "../../Routes/Coordinator";
import { ButtonDiv, DivContainer, LoginDiv } from "./styled";

const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/login"

const Login = () => {
    // useProtectedPage()
    const navigate = useNavigate()
    const { form, onChange, cleanFields } = useForm({email:"", password:""})

    const login = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }      
        axios
          .post(urlLogin, body)
          .then((response) => {
            //localStorange.getItem("token", response.data.token)
            navigate('/Admin')
          })
          .cath((error) => {
            console.log(error.response)
            alert("Verifique se os dados estão corretos")
          })
          cleanFields()
    }

    return (
        <DivContainer>
            
            <LoginDiv>
            
                <h1>Login</h1> 
                <form onSubmit={login}>       
                    <input
                        placeholder={'E-mail'}               
                        type={"email"}               
                        name={'email'} 
                        value={form.email}            
                        onChange={onChange}
                        required
                    />           
                    <input  
                        placeholder={'Senha'}                
                        type="password"                            
                        name={'password'} 
                        value={form.password}             
                        onChange={onChange}
                        required 
                    />
                    <ButtonDiv>
                        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                        <button type={"submit"}>Entrar</button>
                    </ButtonDiv>
                </form>
            </LoginDiv>
            
        </DivContainer>
    )
}
export default Login;