const express = require('express');
const https = require('https');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json())
app.use(express.static('public'));

app.use('/', require('./routes/products.js'))
app.use('/api/checkout', require('./routes/stripe.js'))



// certificate  
const options = {
    key: fs.readFileSync('cert/key.pem', 'utf-8'),
    cert: fs.readFileSync('cert/cert.pem', 'utf-8')
}

// https
// this works on my vercel deployment using a chrome flag. i probably need the certificate on the domain and use express.static to point it to the built static files? probably. i'll figure it out later.

// https.createServer(options, app).listen(3001, () => {
//     console.log("Connected successfully");
// })

// Start server
app.listen(3001, () => {
    console.log("Connected successfully");
})