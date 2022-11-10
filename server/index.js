const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.static('public'));

app.use('/', require('./routes/products.js'))
app.use('/api/checkout', require('./routes/stripe.js'))

// Start server
app.listen(3001, () => {
    console.log("Connected successfully");
})