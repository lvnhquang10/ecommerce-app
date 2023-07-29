const stripe = require("stripe")("sk_test_51MrHMeGrxNYVMq1CkT9f82kGu6npUWhsRv32Q1J6pLLcpXVe9faZ2iTterssfIEG29aYUnh4XrJ8wenqJFj5ZQaL00fVEjCcnz");

exports.checkout = async (req, res, next) => {
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
}