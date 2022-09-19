import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

export default function CartItem({ cartItemId, setTotalValue, totalValue, index }) {
    const { userData } = useContext(UserContext);

    const [cartItem, setCartItem] = useState({});

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${cartItemId}`);

        promise.then(response => {
            setCartItem(response.data);
            setTotalValue(totalValue + Number(response.data.price));
        })
    }, []);

    function removeItem() {
        const promise = axios.put(`${process.env.REACT_APP_API_BASE_URL}/cart/${index}`, {},
            {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            });

        promise.then(() => { console.log("deu bom") });
    }

    return (
        <Container>
            <div>
                <img src={cartItem.image} />
                <ArtName>{cartItem.name}</ArtName>
                <AutorName>Por: {cartItem.seller}</AutorName>

            </div>

            <div>
                <PriceTag>R$ {cartItem.price}</PriceTag>
                <RemoveButton onClick={removeItem}>Remover</RemoveButton>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 15px;

    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 180px;
        border-radius: 12px;
        margin-bottom: 10px;
    }
`;

const ArtName = styled.p`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 3px;
`;

const AutorName = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
`;

const PriceTag = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 55px;
    height: 25px;

    margin-top: 5px;

    border: none;

    border-radius: 5em / 5em;

    background-color: red;
    color: #FFFFFF;
    font-size: 10px;
`;