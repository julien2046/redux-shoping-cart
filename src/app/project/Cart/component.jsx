import React from 'react';
import './styles.scss';

function calcPrice(quantity, price) {
  return parseInt(quantity) * parseInt(price);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,')
}


const Cart = props => {
  const { products, handleChange = f => f } = props;
  let input;

  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} width="100" height="100"/>
            {product.name} : {formatNumber(product.price)}$
            <input
              ref={node => (input = node)}
              type="number"
              value={product.quantity}
              onChange={() => handleChange(event, product.id)}
            />
          </li>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
