import { useState, useEffect } from "react";
const axios = require('axios');

function DisplayAll() {
   
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h3>Display All Product</h3>
            <ul>
                {product.map(ele => <li key={ele.id}>{ele.title}</li>)}
            </ul>   
        </div>
    )
}
         
export default DisplayAll




