import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    const goToAdminHome = () => {
        navigate('/Admin')
    }

    return (
        <div>
            <input
            text={'text'} 
            placeholder={'E-mail'} 
            name={'email'}             
            onChange={'handleInput'}
            />
            <input
            text={'text'} 
            placeholder={'Senha'} 
            name={'senha'}             
            onChange={'handleInput'}
            />
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdminHome}>Entrar</button>
        </div>
    )
}
export default Login;