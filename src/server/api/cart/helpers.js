const products = require('./products');


const update = (snapshot) => {
  const items = snapshot.map(item => ({
    ...products.find(({ id }) => id === item.id),
    quantity: item.quantity,
  }));

  return {
    items,
    total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
  };
};

const validate = (snapshot) => {
  if (!Array.isArray(snapshot)) {
    return false;
  }

  for (let i = 0; i < snapshot.length; i += 1) {
    if (!Object.keys(snapshot[i]).sort() === ['id', 'quantity']) {
      return false;
    }
  }

  return true;
};

module.exports = {
  update,
  validate,
};
