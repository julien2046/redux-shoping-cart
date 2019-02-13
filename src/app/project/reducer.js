import { REVEIVE_PRODUCTS, ADD_PRODUCT } from './actions';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    });
  }

  if (action.type === REVEIVE_PRODUCTS) {

    return Object.assign({}, state, {
      products: state.products.concat(action.payload.items)
    });
  }

  return state;
};
