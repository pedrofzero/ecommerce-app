require('dotenv').config()

const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.post("/create-payment-intent", async (req, res) => {
    const { description, total, shipping, email } = req.body;

    // // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
        description: description,
        shipping,
        receipt_email: email
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    }
    );

});

router.post('/verify-payment', async (req, res) => {
    const { paymentIntent } = req.body;
    const intent = await stripe.paymentIntents.retrieve(paymentIntent).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router