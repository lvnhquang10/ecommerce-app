const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const cartRoutes = require('./routes/cart');

const orderRoutes = require('./routes/order');

const errorController = require('./controllers/error');

const productRoutes = require('./routes/product');

const cors = require('cors');

const app = express();

const ports = process.env.PORT || 3000;

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

app.use(errorController.get404);

app.use(errorController.get500);


app.listen(ports, () => console.log(`Listening on port ${ports}`));





//app.listen(4242, () => console.log('Checkout on 4242')); 
const stripe = require("stripe")("sk_test_51MrHMeGrxNYVMq1CkT9f82kGu6npUWhsRv32Q1J6pLLcpXVe9faZ2iTterssfIEG29aYUnh4XrJ8wenqJFj5ZQaL00fVEjCcnz");

app.post('/checkout', async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.products.map((product => [{
              name: product.name,
              price: product.price,
              quantity: product.quantity,
            }])),
            mode: 'payment',
            success_url: 'http://localhost:3000/success.html',
            cancel_url: 'http://localhost:3000/cancel.html',
        })
        res.status(200).json(session);
    } catch (err) {
        next(err);
    }
});