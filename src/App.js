import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";

export default function App() {
  const [userData, setUserData] = useState(null);
  
  return (
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Navigate to="/products" />
          } />

          <Route path="/products" element={
            <UserContext.Provider value={{ userData }}>
              <Header />
              <ProductsPage />
            </UserContext.Provider>
          } />


        </Routes>
      </BrowserRouter>
    </Body>
  );
}

const Body = styled.div`
  min-height: 100vh;

  background-color: #DCDCDD;
`;