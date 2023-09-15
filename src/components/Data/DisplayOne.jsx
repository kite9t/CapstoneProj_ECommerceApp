const axios = require('axios');
import {useState,useEffect} from 'react';
const BASEURL = "https://fakestoreapi.com/products/";
const [product,setProduct]=useState([]);

function DisplayOne(){
useEffect(()={

    async function getProduct(URL){
        try{ 
            const res = await axios.get(`${BASEURL}`)
            const {data} = res
            console.log(data)
            setProduct(data.results)
            
            
        }catch(error){
            console.error(error);
        }
    }
    
    getProduct(BASEURL);
})}

export default DisplayOne;
