import { reducer as routerReducer } from 'fans-router';


export default (state, action) => ({
  app: {
    name: 'Golo Inc.',
  },
  router: routerReducer(state.router, action, state),
  user: {
    firstName: 'Steve',
    lastName: 'Rogers',
  },
});
