import React from 'react';

import './styles.scss';

const Cart = props => {
  console.log(props.products);
  
  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        <button onClick={() => props.addProduct({id: 2, title: 'Product 2'})}>
          Add Product
        </button>
      </div>
    </div>
  );
}

// Cart.propTypes = {};

export default Cart;
