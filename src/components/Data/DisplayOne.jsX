import React, { useState, useEffect } from 'react';

const axios = require('axios');

function DisplayOne() {
  const BASEURL = 'https://fakestoreapi.com/products/';
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct(URL) {
      try {
        const res = await axios.get(`${URL}`);
        const { data } = res;
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  getProduct(BASEURL);
  console.log({ product });

  return (
    <div>
      <h3>Display One Product</h3>
      <ul>
        {product.map((ele) => <p key={ele.id}>{ele.title}</p>)}
      </ul>

    </div>

  );
}

export default DisplayOne;
