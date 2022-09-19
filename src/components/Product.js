import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Product({ product }) {
    return (
        <Link to={`/products/${product._id}`} style={{ textDecoration: 'none'}}>
            <ProductContainer>
                <img src={product.image} />
                <ArtName>{product.name}</ArtName>
                <AutorName>{product.seller}</AutorName>
                <PriceTag>R$ {product.price}</PriceTag>
            </ProductContainer>
        </Link>
    )
}

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 240px;
    height: 200px;

    margin: 5px;
    padding: 3px;

    img {
        width: 200px;
        height: 160px;
        border-radius: 12px;
        margin-bottom: 2px;
    }
    
    p {
        margin-bottom: 2px;
        color: black;
    }
`;

const ArtName = styled.p`
    font-size: 13px;
    font-weight: bold;
`;

const AutorName = styled.p`
    font-size: 10px;
`;

const PriceTag = styled.p`
    font-size: 16px;
    font-weight: bold;
`;