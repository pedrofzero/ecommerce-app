const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public')); 
app.use('/', require('./routes/products.js'))

// Product images to be displayed on the front-end
app.use('/images', express.static('images'));

// Stripe
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
  
    res.redirect(303, session.url);
  });

// Start server
app.listen(3001, () => {
    console.log("Connected successfully");
})