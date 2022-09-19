import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


import UserContext from '../contexts/UserContext';
import CartItem from "../components/CartItem";

import dotenv from 'dotenv';
dotenv.config();

export default function CartPage() {
    const { userData } = useContext(UserContext);

    const [cartItems, setCartItems] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    const navigate = useNavigate();

    if (userData) {
        useEffect(() => {
            const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            });

            promise.then(response => {
                setCartItems(response.data.cartArray);
                console.log(response.data);
            })
        }, []);
    }

    function navigateCheckout() {
        navigate("/checkout");
    }

    return (
        <Container>
            <CartContainer>
                {!userData ?
                    (
                        <LoggedWarning>Você não está logado</LoggedWarning>
                    ) :
                    (
                        <>
                            {
                                cartItems.map((cartItemId, key) => (
                                    <CartItem cartItemId={cartItemId}
                                        setTotalValue={setTotalValue}
                                        totalValue={totalValue} index={key} />
                                ))
                            }

                            <TotalValueContainer>
                                <p>Total:</p>
                                <p>R$ {totalValue.toFixed(2)}</p>
                            </TotalValueContainer>
                        </>
                    )}


            </CartContainer>

            <CheckOutButton onClick={navigateCheckout}>
                <p>Ir para checkout</p>
            </CheckOutButton>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 50px;

    width: 100%;
`;

const CartContainer = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;
    min-height: 300px;

    padding: 15px;
    margin-bottom: 50px;

    box-shadow: 0 1px 5px rgb(150, 150, 150);

    border-radius: 5px;

    background-color: #FFFFFF;
`;

const LoggedWarning = styled.h1`
    font-size: 60px;
    color: #1985A1;
`;

const TotalValueContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CheckOutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 50%;
    height: 50px;

    margin-top: 30px;
    margin-bottom: 50px;

    border: none;

    border-radius: 5em / 5em;

    background-color: #1985A1;
    color: #FFFFFF;

    font-size: 20px;
`;