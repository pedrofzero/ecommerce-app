const express = require('express');
const cors = require('cors');
const con = require('./db/db');
const app = express();

const YOUR_DOMAIN = 'http://localhost:3003';

app.use(cors());

app.get('/', (req, res) => {
    res.send(con)
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