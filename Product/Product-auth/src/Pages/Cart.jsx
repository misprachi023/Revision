import React, { useContext, useReducer } from 'react';
import { CartContext } from '../Context/CartContext';

const initialState = {
  items: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    default:
      return state;
  }
}   


function Cart(){
    const { state } = useContext(CartContext);
    
    return(
         
      <div>
        {console.log(state)}
        <h1>Shopping Cart</h1>
        <h2>Items:</h2>
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
        <h3>Total: ${state.total}</h3> 
       </div>
    )
}
export { Cart };

