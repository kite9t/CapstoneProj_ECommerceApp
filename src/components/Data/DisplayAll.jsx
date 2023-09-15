import React, { useState, useEffect } from 'react';
import CardLayout from '../Card';

function DisplayAll() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Display All Product</h3>

      <p>
        {product.map((ele) => (
          <li key={ele.id}>
            <CardLayout />
            {ele.title}
          </li>
        ))}
      </p>
    </div>
  );
}

export default DisplayAll;
