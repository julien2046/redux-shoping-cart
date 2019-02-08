const express = require('express');
const path = require('path');
const api = require('./api/cart/endpoints');

const app = express();

const PORT = process.env.PORT || 3000;

const expressHandlebars = require('express-handlebars');

const hbs = expressHandlebars.create({
  extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.use('/public', express.static(path.join(__dirname, '../../dist')));

app.get('/favicon.ico', (req, res) => {
  res.status(200).set({ 'Content-Type': 'image/x-icon' }).send();
});

app.get('/api/v1/cart', api.get);
app.post('/api/v1/cart', api.post);

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Spark listening on port 3000!');
});
