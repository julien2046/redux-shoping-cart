import { REVEIVE_PRODUCTS, ADD_PRODUCT } from './actions';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    })
  }

  if (action.type === ADD_PRODUCT) {
    return Object({}, state, {
      products: state.products.concat(action.payload)
    })
  }

  return state;
};
