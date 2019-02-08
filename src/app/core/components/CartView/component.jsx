import React from 'react';
import Header from '../Header/container';
import Cart from '../../../project/Cart/container';
import './styles.scss';


const CartView = () => (
  <div className="CartView">
    <Header />
    <div className="CartView__title">
      Shopping cart
    </div>
    <Cart />
  </div>
);

export default CartView;
