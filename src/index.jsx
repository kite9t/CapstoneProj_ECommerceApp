import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopping from './Pages/Shopping';
import ShoppingOne from './Pages/ShoppingOne';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shopping/:id" element={<ShoppingOne />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
);
