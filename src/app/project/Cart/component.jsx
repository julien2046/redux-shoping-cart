import React from 'react';
import './styles.scss';

function calcPrice(quantity, price) {
  return parseInt(quantity) * parseInt(price);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,')
}


const Cart = props => {
  const { products, handleChange = f => f, handleClick = f => f, handleSubmit = f => f  } = props;
  const total = products.reduce((acc, element) => acc + element.price * element.quantity, 0);

  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        <ul className="Cart__list">
          {products.map(product => (
            <li className="Cart__list-element" key={product.id}>
              <div className="Cart__image-container">
                <img className="Cart__element-image" src={product.image} width="100" height="100"/>
              </div>
              <div className="Cart__element-info">
                <p className="Cart__element-name">{product.name} : {formatNumber(product.price)}$</p>
                <input
                  className="Cart__quantity"
                  type="number"
                  min="1"
                  max="99"
                  value={product.quantity}
                  onChange={() => handleChange(event, product.id)}
                />
                <p className="Cart__element-total">Total : {formatNumber(calcPrice(product.quantity, product.price))}$</p>
                <a href='#' onClick={() => handleClick(event, product.id)}>Remove</a>
              </div>
            </li>
          ))}
        </ul>
        <p>Total: {formatNumber(total)}</p>
        <button onClick={() => handleSubmit(event)}>Buy</button>
      </div>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
