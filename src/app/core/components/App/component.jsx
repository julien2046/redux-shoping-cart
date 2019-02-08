import React from 'react';
import { routerPropTypes } from 'fans-router';
import CartView from '../CartView/component';

import './styles.scss';


const App = () => (
  <div className="App">
    <div className="App__wrapper">
      <CartView />
    </div>
  </div>
);

App.propTypes = {
  route: routerPropTypes.route, // eslint-disable-line
};

export default App;
