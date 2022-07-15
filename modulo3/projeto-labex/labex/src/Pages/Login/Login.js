import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHome } from "../../Routes/Coordinator";
import { ButtonDiv, DivContainer, LoginForm } from "./styled";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    // const login = () => {
    //     const body = {
    //         email: email,
    //         password: password
    //     }
        
    //     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/AdrianaLima/login', body)
    //       .then((response) => {
    //         localStorange.setItem("token, response.data.token")
    //         navigate.push('/Admin')
    //       })
    //       .cath((error) => {
    //         console.log(error.response)
    //       })
    // }

    return (
        <DivContainer>
            
            <LoginForm>
            
                <h1>Login</h1> 
                         
                <input
                value={email}
                type="email"
                placeholder='E-mail'
                name={'email'}             
                onChange={onChangeEmail}
                size="35"
                required pattern=""

                />
            
                <input  
                value={password} 
                type="password"            
                placeholder={'Senha'} 
                name={'senha'}             
                onChange={onChangePassword}
                size="35"
                required 
                />
                <ButtonDiv>
                <button onClick={() => goBack(navigate)}>Home</button>
                <button onClick={() => goToAdminHome(navigate)}>Entrar</button>
                </ButtonDiv>
            </LoginForm>
            
        </DivContainer>
    )
}
export default Login;