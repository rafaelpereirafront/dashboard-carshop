import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Vendas from './components/Vendas';
import Login from './components/login/Login';
import Carros from './components/Carros';
import Vendedor from './components/Vendedor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Vendas />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/carros/*" element={<Carros />} />
          <Route path="/vendedor/*" element={<Vendedor />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
