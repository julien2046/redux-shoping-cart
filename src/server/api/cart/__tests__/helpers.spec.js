const { expect } = require('chai');
const { update, validate } = require('../helpers');


const snapshot = [
  {
    id: 'bb2d9254c8c6b0be',
    quantity: 1,
  },
  {
    id: 'd9471f73d3cb4582',
    quantity: 2,
  },
];

describe('Cart endpoints helpers', () => {
  it('generates a cart payload from snapshot', () => {
    expect(update(snapshot)).to.eql({
      items: [
        {
          id: 'bb2d9254c8c6b0be',
          name: 'Strawberries',
          image: 'strawberries.jpg',
          price: 199,
          quantity: 1,
        },
        {
          id: 'd9471f73d3cb4582',
          name: 'Blueberries',
          image: 'blueberries.jpg',
          price: 119,
          quantity: 2,
        },
      ],
      total: 437,
    });
  });

  it('generates an empty cart payload from snapshot', () => {
    expect(update([])).to.eql({
      items: [],
      total: 0,
    });
  });

  it('validates a snapshot (pass)', () => {
    expect(validate([
      {
        id: '123',
        quantity: 3,
      },
    ])).to.equal(true);
  });

  it('validates a snapshot (fail)', () => {
    expect(validate([
      {
        id: '123',
        name: 'Hello',
        quantity: 3,
      },
    ])).to.equal(true);
  });
});
