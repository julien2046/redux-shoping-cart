import React from 'react';
import './styles.scss';

const Cart = ({ title }) => {

  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

// Cart.propTypes = {};

export default Cart;
