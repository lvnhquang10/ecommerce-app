const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const cartRoutes = require('./routes/cart');

const orderRoutes = require('./routes/order');

const errorController = require('./controllers/error');

const productRoutes = require('./routes/product');

const checkoutRoutes = require('./routes/checkout');

const cors = require('cors');

const app = express();

const ports = process.env.PORT || 8080;

const hostname = '0.0.0.0';


app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true })); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/auth', authRoutes);

app.use('/product', productRoutes);

app.use('/order', orderRoutes);

app.use('/cart', cartRoutes);

app.use('/checkout', checkoutRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, hostname, () => console.log(`Server running at http://${hostname}:${ports}`));
 
