const express = require("express");

const cors = require("cors");

const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

const stripe = require("stripe")("sk_test_51MrHMeGrxNYVMq1CkT9f82kGu6npUWhsRv32Q1J6pLLcpXVe9faZ2iTterssfIEG29aYUnh4XrJ8wenqJFj5ZQaL00fVEjCcnz");

app.post("/checkout", async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.products.map((product => {
               price_data: {
                currency: 'usd',
                product_data: {
                    name: product.name,
                    image: [product.image]
                },
                unit_amount: product.price,
            },
            quantity: product.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        });
        res.status(200).json(session);
    } catch (err) {
        next(err);
    }
});

app.listen(4242, () => console.log('Checkout on 4242')); 