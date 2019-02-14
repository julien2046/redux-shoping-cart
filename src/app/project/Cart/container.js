import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts, updateQuantity, removeProduct } from '../actions';
import View from './component';

class Container extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  handleChange = (event, id) => {
    const { updateQuantity, products } = this.props;
    const quantity = event.target.value != '' ? parseInt(event.target.value) : 1;
    updateQuantity(quantity, id, products);
  }

  handleClick = (event, id) => {
    event.preventDefault();

    const { removeProduct, products } = this.props;
    removeProduct(id, products)
  }

  handleSubmit = (event, id) => {
    event.preventDefault();

    const { updateQuantity, products } = this.props;
    const quantity = event.target.value;
    updateQuantity(quantity, id, products);
  }

  render() {
    const { products, title } = this.props;

    return (
      <View products={products} handleChange={this.handleChange} handleClick={this.handleClick} handleSubmit={this.handleSubmit} />
    );
  }
}

const mapState = state => ({
  products: state.cart.products
});

export default connect(
  mapState,
  { fetchProducts, updateQuantity, removeProduct }
)(Container);
