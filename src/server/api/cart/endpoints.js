const { update, validate } = require('./helpers');


const get = (req, res) =>
  res.status(200).send(update([
    {
      id: 'bb2d9254c8c6b0be',
      quantity: 1,
    },
    {
      id: 'd9471f73d3cb4582',
      quantity: 3,
    },
    {
      id: '2071beb5fca449f7',
      quantity: 2,
    },
    {
      id: '33b203b31b0e51a9',
      quantity: 1,
    },
  ]));

const post = (req, res) => {
  let valid;

  try {
    valid = validate(req.body);
  } catch (e) {
    res.status(422).send({ error: 'INVALID_PAYLOAD' });
  }

  if (valid) {
    res.status(200).send(update(req.body));
    return;
  }

  res.status(422).send({ error: 'INVALID_PAYLOAD' });
};


module.exports = {
  get: (req, res) => setTimeout(() => get(req, res), 1000),
  post: (req, res) => setTimeout(() => post(req, res), 1000),
};
