import React, { Component } from "react";
import { connect } from 'react-redux';
import { addProduct, fetchProducts } from '../actions';
import View from './component';

class Container extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products, title } = this.props;

    return (
      <View products={products} />
    );
  }
}

const mapState = state => ({
  products: state.cart.products
});

const mapDispatch = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload))
})

export default connect(
  mapState,
  { fetchProducts }
)(Container);
