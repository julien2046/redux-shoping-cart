import React from 'react';
import './styles.scss';

function calcPrice(quantity, price) {
  return parseInt(quantity) * parseInt(price);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,')
}


const Cart = ({ products }) => {

  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        {products.map(product => (
          <li key={product.id}><img src={product.image} width="100" height="100"/>
            {product.name} {formatNumber(calcPrice(product.quantity, product.price))}$
          </li>
        ))}
      </div>
    </div>
  );
}

// Cart.propTypes = {};

export default Cart;
