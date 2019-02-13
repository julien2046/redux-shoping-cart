import fetch from 'isomorphic-fetch';

export const REVEIVE_PRODUCTS = 'REVEIVE_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function fetchProducts() {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/cart`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "REVEIVE_PRODUCTS", payload: json });
      });
  };
}


export function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
