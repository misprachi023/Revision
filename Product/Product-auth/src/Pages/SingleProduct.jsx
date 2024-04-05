import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${product_id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product details');
        }
        const text = await res.text(); 
        if (!text.trim()) {
          throw new Error('Empty response received');
        }
        const data = JSON.parse(text);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error.message);
      }
    };

    fetchProduct();
  }, [product_id]);

  return (
    <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'center' , maxWidth:"800px", alignContent:"center", margin:"auto", padding:"20px", border:"1px solid #ccc", borderRadius:"5px", }}>
    {error ? (
      <p>{error}</p>
    ) : product ? (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={product.image} style={{ width: '200px', height: '200px', borderRadius: '5px' }} alt={product.title} />
        </div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>INR: {product.price}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default SingleProduct;
