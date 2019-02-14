import fetch from 'isomorphic-fetch';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function fetchProducts() {
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/cart")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVE_PRODUCTS, payload: json });
      });
  };
}

export function updateQuantity(quantity, id, products) {
  return {
    type: UPDATE_QUANTITY,
    quantity,
    id,
    products
  }
}

export function removeProduct(id, products) {
  return {
    type: REMOVE_PRODUCT,
    id,
    products
  }
}
