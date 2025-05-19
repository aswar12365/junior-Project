import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../src/components/Product";
import Panier from "../src/components/panier";
import { CartProvider } from "../src/components/CartContext";
import './App.css'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </CartProvider>
  );
}

export default App;