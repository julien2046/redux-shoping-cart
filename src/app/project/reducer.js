import {
  RECEIVE_PRODUCTS,
  UPDATE_QUANTITY,
  REMOVE_PRODUCT
} from './actions';

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
    console.log(state);
    const products = action.products.map( product => product.id === action.id ? {...product, quantity: action.quantity} : product);
    return Object.assign({}, state, {
      products: state.products.concat(products)
    })
  }

  if (action.type === REMOVE_PRODUCT) {
    const products = action.products.filter(product => product.id !== action.id);

    return Object.assign({}, state, {
      products: state.products.concat(products)
    })
  }

  return state;
};
