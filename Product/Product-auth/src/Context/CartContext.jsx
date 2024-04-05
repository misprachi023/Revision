import React, { createContext, useContext, useReducer } from 'react';
 const CartContext = createContext();
export function CartProvider({ children }) {
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

    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  }
  export function useCart() {
    return useContext(CartContext);
  }
  export function AddToCart({ product }) {
    const { dispatch } = useCart();
  
    const handleAddToCart = () => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };
  
    return (
      <button onClick={handleAddToCart}>
        Add Product
      </button>
    );
  }
export { CartContext}; 