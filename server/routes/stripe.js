const router = require('express').Router()
const stripe = require('stripe')(import.meta.env.STRIPE_SECRET_KEY)

router.post("/create-payment-intent", async (req, res) => {
    const { description, total } = req.body;

    // // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
        description: description
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    }
    );

});

module.exports = router