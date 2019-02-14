import React, { Component } from "react";
import { connect } from 'react-redux';
import { addProduct, fetchProducts, updateQuantity } from '../actions';
import View from './component';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  handleChange(event, id) {
    const { updateQuantity, products } = this.props;
    const quantity = event.target.value;
    updateQuantity(quantity, id, products);
  }

  render() {
    const { products, title } = this.props;

    return (
      <View products={products} handleChange={this.handleChange} />
    );
  }
}

const mapState = state => ({
  products: state.cart.products
});

export default connect(
  mapState,
  { fetchProducts, updateQuantity }
)(Container);
