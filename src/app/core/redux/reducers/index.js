import { reducer as routerReducer } from 'fans-router';
import cartReducer from '../../../project/reducer';


export default (state, action) => ({
  app: {
    name: 'Golo Inc.',
  },
  cart: cartReducer(state.products, action),
  router: routerReducer(state.router, action, state),
  user: {
    firstName: 'Julien',
    lastName: 'Banchetti',
  },
});
