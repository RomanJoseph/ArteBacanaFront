import React from "react";
import styled from 'styled-components';
import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const [form, setForm] = useState()
const { userData, setUserData} = useContext(UserContext)
const navigate = useNavigate()

function handleForm(event){
    setForm({
        ...form,[event.target.name]:event.target.value
    })
}

function submitLogin(event){
    event.preventDefault()

    const promise = axios.post("http://localhost:5000/login", form)
    promise.then((res) => {
        setUserData(res.data)
        console.log(res.data)
        return navigate("/")
    })
    promise.catch((err)  => alert("Verifique se o e-mail ou a senha foram digitados corretamente"))
}

    return (
        <LoginPage>
            <h1>Login</h1>
            <LoginForm onSubmit={submitLogin}>
                <label for="email">E-mail:</label>
                <input onChange={handleForm} name="email" type="text" placeholder='exemplo@email.com'/>
                <label for="password">Senha:</label>
                <input onChange={handleForm} name="password" type="password" placeholder='suasenha123aqui'/>
                <input name="Login" type="submit" value="Login"/>
            </LoginForm>
            <span onClick={() => navigate("/register")}>Ainda não tem cadastro ? Faça um agora !</span>
        </LoginPage>
    )
}

const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;

    h1{
        font-size: 45px;
        font-weight: 400;
    }

    span{
        margin-top: 40px;
        cursor: pointer;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    input{
        all: unset;
        background-color: #FFFFFF;
        width: 420px;
        height: 45px;
        border-radius: 20px;
        border: 1px solid black;
        text-align: center;
    }

    label{
        margin-top: 20px;
        margin-left: 20px;
        margin-bottom: 5px;
    }

    input::placeholder{
        text-align: center;
    }

    input[name="Login"]{
        margin-top: 45px;
        background-color: #CCCCCC;
    }
`