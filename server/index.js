const express = require('express');
const cors = require('cors');
const con = require('./db/db');
const app = express();

app.use(cors());

// Get 4 shirts (Best Seller)
app.get('/getBestSellers', (req, res) => {
    con.query("SELECT * from products LIMIT 3", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
})

// Get all shirts
app.get('/getProducts', (req, res) => {
    con.query("SELECT * from products", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/getProductsByType', (req, res) => {
    let type = req.query.type;
    con.query("SELECT * from products WHERE type = ? ", [type], (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
})

// Get shirt by ID
app.get('/getProduct', (req, res) => {
    let id = req.query.id;
    con.query("SELECT * from products WHERE id = ? ", [id], (err, result, fields) => {
        if (result) {
            res.send(result);
        } 
        if (err) {
            console.log(err);
            res.send(err);
        }
    })
})

app.use(express.static('public')); 
app.use('/images', express.static('images'));

// Start server
app.listen(3001, () => {
    console.log("Connected successfully");
})