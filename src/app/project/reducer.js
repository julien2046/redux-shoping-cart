import {
  RECEIVE_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_QUANTITY } from './actions';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {

  if (action.type === RECEIVE_PRODUCTS) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload.items)
    });
  }

  if (action.type === UPDATE_QUANTITY) {
    const products = action.products.map( product => product.id === action.id ? {...product, quantity: action.quantity} : product);
    return Object.assign({}, state, {
      products: state.products.concat(products)
    })
  }

  return state;
};
