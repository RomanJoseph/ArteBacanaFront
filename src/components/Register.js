import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Register(){
    const [form, setForm] = useState()
    const navigate = useNavigate()

    function handleForm(event){
        setForm({
            ...form,[event.target.name]:event.target.value
        })
    }
    
    function submitRegister(event){
        event.preventDefault()

        if(form.passwordConfirmation !== form.password){
            return alert("Suas senhas não coincidem")
        }
        const promise = axios.post("http://localhost:5000/register", {name:form.name, password:form.password, email:form.email})
        promise.then((res) => {
            alert("Cadastro criado com sucesso!")
            return navigate("/login")
        })
        promise.catch((err)  => alert("Verifique se todos os campos foram preenchidos corretamento"))
    }
    return (
        <RegisterPage>
        <h1>Login</h1>
        <RegisterForm onSubmit={submitRegister}>
            <label for="name">Nome:</label>
            <input onChange={handleForm} name="name" type="text" placeholder='Seu lindo nome aqui' required/>
            <label for="email">E-mail:</label>
            <input onChange={handleForm} name="email" type="email" placeholder='exemplo@email.com' required/>
            <label for="password">Senha:</label>
            <input onChange={handleForm} name="password" type="password" placeholder='suasenha123aqui' required/>
            <label for="passwordConfirmation">Confirme sua senha:</label>
            <input onChange={handleForm} name="passwordConfirmation" type="password" placeholder='suasenha123aqui' required/>
            <input name="Login" type="submit" value="Cadastrar"/>
        </RegisterForm>
        <span onClick={() => navigate("/login")}>Já possui um cadastro ? Faça Login agora !</span>
    </RegisterPage>
    )
}

const RegisterPage = styled.div`
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

const RegisterForm = styled.form`
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