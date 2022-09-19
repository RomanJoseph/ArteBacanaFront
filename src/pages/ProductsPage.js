import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Product from "../components/Product";
import dotenv from 'dotenv';
dotenv.config();

export default function ProductsPage() {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);

        promise.catch(response => { console.log(response) });

        promise.then(response => {
            setProductsList(response.data.productsArray);
            console.log(response.data.productsArray);
        });
    }, []);

    return (
        <Container>
            <ContainerTitle>Produtos</ContainerTitle>
            <ProductsContainer>

                {
                    productsList.map((product, key) => (
                        <Product product={product} />
                    ))
                }

            </ProductsContainer>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 50px;

    width: 100%;
`;

const ContainerTitle = styled.h1`
    font-size: 40px;
    color: #1985A1;
`;

const ProductsContainer = styled.div`    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 70%;
    min-height: 300px;

    margin-top: 20px;
    padding: 15px;

    box-shadow: 0 1px 5px rgb(150, 150, 150);

    border-radius: 5px;

    background-color: #FFFFFF;
`;