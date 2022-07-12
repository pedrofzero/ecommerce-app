const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_QUXcoU3BnbZXp6IMVi7BkW8s');
const con = require('./db/db');
const app = express();

const YOUR_DOMAIN = 'http://localhost:3003';

app.use(cors());

app.get('/', (req, res) => {
    res.send(con)
})

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
})

app.get('/getShirts', (req, res) => {
    con.query("SELECT * from tshirt", (err, result, fields) => {
        if (err) throw err;
        console.log(res);
        res.send(result)
    })
})

app.get('/getShirt', (req, res) => {
    let id = req.query.id;
    con.query("SELECT * from tshirt WHERE id = ? ", [id], (err, result, fields) => {
        if (result) {
            console.log(result);
            res.send(result);
        } 
        if (err) {
            console.log(err);
            res.send(err);
        }
    })
})

app.listen(3000, () => {
    console.log("Connected successfully");
})