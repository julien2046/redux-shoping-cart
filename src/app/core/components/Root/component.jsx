import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RouterProvider, createRouter } from 'fans-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from '../App/container';
import reducer from '../../redux/reducers';
import routes from '../../router/routes';
import '../../../../scss/app.scss';


const logger = createLogger({
  collapsed: true,
  diff: true,
  timestamp: false,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(
   applyMiddleware(thunk, logger)
 ));

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)}>
      <App />
    </RouterProvider>
  </Provider>
);
