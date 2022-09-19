import { useState } from "react"
import styled from "styled-components"

export default function PaymentPage(){
    const [ method, setMethod ] = useState



    return(
        <>
        <Choice></Choice>
            <Content>
                <h1>Dados para o pagamento</h1>
                <PaymentForm>
                    <label htmlFor="CPF">Nome:</label>
                    <input name="CPF" type="text" pattern="[0-9]{11}" placeholder="O lindo nome que está no seu cartão" required/>
                    <label htmlFor="CPF">CPF:</label>
                    <input name="CPF" type="text" pattern="[0-9]{11}" placeholder="CPF" required/>
                    <label htmlFor="creditCardNumber">Número do cartão de crédito:</label>
                    <input name="creditCardNumber" type="text" pattern="[0-9]{12}" placeholder="Número do cartão" required/>
                    <label htmlFor="CVV">Código de segurança:</label>
                    <input name="CVV" type="text" pattern="[0-9]{3}" placeholder="Código de segurança" required/>
                    <label htmlFor="date">Data de vencimento:</label>
                    <input name="date" type="date" required/>
                </PaymentForm>
                <h1>Dados de entrega</h1>
                <PaymentForm>
                    <label htmlFor="street">Rua:</label>
                    <input name="street" type="text" placeholder="A rua da sua casa" required/>
                    <label htmlFor="number">Número:</label>
                    <input name="number" type="number" placeholder="O número da sua casa"/>
                    <label htmlFor="complement">Complemento:</label>
                    <input name="complement" type="text" placeholder="O complemento da sua casa, se houver"/>
                    <label htmlFor="district">Bairro:</label>
                    <input name="district" type="text" placeholder="O bairro da sua casa"/>
                    <label htmlFor="city">Cidade:</label>
                    <input name="city" type="text" placeholder="Sua cidade"/>
                    <label htmlFor="state">Estado:</label>
                    <input name="state" type="text" placeholder="Seu estado"/>

                    <input name="submit" type="submit" value="Concluir pagamento"/>
                </PaymentForm>
            </Content>  
        </>
            
    )
}

const Choice = styled.div`
    display: flex;

    div{
        border: 1px solid grey
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-top: 3%;
        font-size: 45px;
        font-weight: 400;
    }
`

const PaymentForm = styled.form`
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

    input[name="date"]{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-right: 20px;
    }

    input[name="submit"]{
        margin-top: 45px;
        background-color: #CCCCCC;
        margin-bottom: 80px;
    }
`