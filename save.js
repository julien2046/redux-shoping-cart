// actions.js
export function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload
  }
}

export function updateQuantity(id, quantity) {
  return {
    type: UPDATE_QUANTITY,
    id,
    quantity
  }
}

// reducer.js
if (action.type === UPDATE_QUANTITY) {
  return state.products.map(product =>
    product.id === action.id ? { ...product, quantity: action.quantity } : product
  )
}

if (action.type === ADD_PRODUCT) {
  return Object.assign({}, state, {
    products: state.products.concat(action.payload)
  });
}

// container.js
handleChange(id, quantity) {
  const { updateQuantity } = this.props;
  updateQuantity(id, quantity);
}

handleUpdate() {
  const { updateProduct } = this.props;
  updateQuantity(id);
}

return (
  <View products={products} handleChange={this.handleChange}/>
);

const mapDispatch = dispatch => ({
  updateQuantity: payload => dispatch(updateQuantity(id, quantity))
})

export default connect(
  mapState,
  { fetchProducts, updateQuantity }
)(Container);

// component.js
const Cart = props => {
  const { products } = props;
  let input;

  return (
    <div className="Cart">
      <div className="Cart__wrapper">
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} width="100" height="100"/>
            {product.name} {formatNumber(calcPrice(product.quantity, product.price))}$
            <input ref={node => (input = node)} type="number" value={product.quantity} onChange={() => props.handleChange(product.id, input.value)} />
          </li>
        ))}
      </div>
    </div>
  );
}
