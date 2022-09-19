import React from "react";
import { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dotenv from 'dotenv';
dotenv.config();

import UserContext from "../contexts/UserContext";
import cart from "../assets/cart.svg";

export default function Header() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container>
            <div>

                <Title onClick={() => navigate("/products")}>ArteBacana</Title>

                <SearchBar><p>Pesquisar</p></SearchBar>

                <Credencials>
                    {!userData ? (
                        <>
                            <Link to="/login"
                                style={{ textDecoration: 'none' }} >
                                <p>Login</p>
                            </Link>
                            <Link to="/register"
                                style={{ textDecoration: 'none' }} >
                                <p>Registrar</p>
                            </Link>
                        </>

                    )
                        :
                        (<p>Olá, {userData.user}</p>)
                    }

                    <Link to="/cart">
                        <Cart src={cart} />
                    </Link>
                </Credencials>

            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 40px;

    background-color: #C5C3C6;

    box-shadow: 0 1px 5px rgb(150, 150, 150); 

    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 70%;
    }
`;

const Title = styled.h1`
    font-size: 25px;
    color: #1985A1;
`;

const Cart = styled.img`
    width: 20px;
    height: 20px;
`;

const Credencials = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 13px;
        font-weight: bold;

        margin-right: 20px;

        color: black;
    }
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 250px;
    height: 28px;

    border-radius: 3px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    color: #979797;
`;