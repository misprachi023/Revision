import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { state } = useContext(CartContext);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>
      <h2>Items:</h2>
      <div style={{  display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px"}}>
        {state.items.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img src={item.image} alt={item.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
            <h4>{item.title}</h4>
            <h4>Price: INR {item.price}</h4>
          </div>
        ))}
      </div>
      <h3>Total: INR {state.total}</h3>
    </div>
  );
}

export { Cart };
