import { connect } from 'react-redux';
import { addProduct, reveiceProducts } from '../actions';
import component from './component';

const mapState = state => ({
  title: state.app.name,
  products: state.cart.products
});

const mapDispatch = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload))
})

export default connect(
  mapState,
  mapDispatch
)(component);
