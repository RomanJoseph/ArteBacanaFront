import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';


export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/products/${params.id}`);

        promise.then(response => {
            setProduct(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <Container>
            <ProductContainer>
                <img src={product.image} />
                <DataContainer>
                    <div>
                        <ArtName>{product.name}</ArtName>
                        <AutorName>By: {product.seller}</AutorName>
                        <PriceTag>R$ {product.price}</PriceTag>
                    </div>
                    <div>
                        <p>Description: {product.description}</p>
                    </div>
                </DataContainer>

            </ProductContainer>

            <CartButton>
                <p>Adicionar ao carrinho</p>
            </CartButton>

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

const ProductContainer = styled.div`    
    display: flex;
    flex-direction: column;

    width: 70%;
    min-height: 300px;

    padding: 15px;

    box-shadow: 0 1px 5px rgb(150, 150, 150);

    border-radius: 5px;

    background-color: #FFFFFF;

    img {
        border-radius: 12px;
        margin-bottom: 10px;
    }
`;

const DataContainer = styled.div`
    display: flex;

    width: 100%;

    div {
        width: 50%;
    }
`;

const ArtName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2px;
`;

const AutorName = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

const PriceTag = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

const CartButton = styled.button`
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