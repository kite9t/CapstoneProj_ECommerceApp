const axios = require('axios');
const BASEURL = "https://fakestoreapi.com/products/";

async function getProduct(URL){
    try{ 
        const res = await axios.get(`${BASEURL}`)
        const {data} = res
        console.log(data)
        
    }catch(error){
        console.error(error);
    }
}

getProduct(BASEURL);

