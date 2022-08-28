const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static('public')); 

app.use('/', require('./routes/products.js'))

// Product images to be displayed on the front-end
app.use('/images', express.static('images'));

// Start server
app.listen(3001, () => {
    console.log("Connected successfully");
})