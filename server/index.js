const express = require('express');
const https = require('https');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json())
app.use(express.static('public'));

app.use('/', require('./routes/products.js'))
app.use('/api/checkout', require('./routes/stripe.js'))

app.get('/123', (req, res) => {
    console.log('helo')
})

// certificate  
const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}

// https
https.createServer(options, app).listen(3001, () => {
    console.log("Connected successfully");
})

// Start server
// app.listen(3001, () => {
//     console.log("Connected successfully");
// })