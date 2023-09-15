import { useState, useEffect } from "react";
const axios = require('axios');
const BASEURL = "https://fakestoreapi.com/products";

export default function DisplayAll() {
    const [product, setProduct] = useState([]);

    try{ 
        axios.get(`${BASEURL}`)
        .then(res=>{
            console.log(res)
        })
    }catch(error){
        console.error(error);
    }


{/*    useEffect(() => {
        async function getAllProduct(URL) {
            try {
                const response = await fetch(URL);
                const data = await response.json()
                setProduct(data.results);
            } catch (err) {
                console.error(err);
            }
        }
        getAllProduct();
    }, []);

    return (
        <div>
            {product.map((product) =>
                <div>
                    {product.name}
                </div>
            )}
        </div>
    )
            

    useEffect(() => {
        {/*fetch(BASEURL)
            console.log("123")
            .then(res => res.json())
            console.log(res.json())
            .then(data => console.log(data))
            setProduct(data.results)

    .catch(err => console.error(err)) 

    console.log("Hello")
    },[])
    return (
        <div>
            <h1>Display All123</h1>
            <ul>
                {/* {product.map((ele,index) => <li key={index}> {ele.title}</li>)} 
            </ul>
            
        </div>
    ) */}
}

