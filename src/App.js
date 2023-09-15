import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from "react";
import DisplayOne from './components/Data';
import {useState, useEffect} from 'react';
import axios from 'axios';
const BASEURL = "https://fakestoreapi.com/products/";




function App() { 

const [product,setProduct]=useState([]);
useEffect(()=>{

  async function getProduct(URL){
      try{ 
          const res = await axios.get(`${BASEURL}`)
          const {data} = res
          console.log(data)
          setProduct(data)
          
      }catch(error){
          console.error(error);
      }
  }
  getProduct(BASEURL);
},[])
console.log({product});  
  return (
    <div className="App">
      
      <h1> Home </h1>
      {product.map((product) => <p key={product.id} >{product.title}</p>)}
      
    </div>
  );
}

export default App;
