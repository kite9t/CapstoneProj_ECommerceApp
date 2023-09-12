import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Shopping} from "./Pages/Shopping";
import {Login} from "./Pages/Login";
import {Register} from "./Pages/Register";
import {Cart} from "./Pages/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes> 
            <Route path="/home" element={<App/>} />
            <Route path="/shopping" element={<Shopping/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />

        </Routes>
        
    
    </BrowserRouter>

);

