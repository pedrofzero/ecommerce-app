const con = require('../db');


const getBestSellers = (req, res) => {
    con.query("SELECT * from products LIMIT 3", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
}

// Get all shirts
const getProducts = (req, res) => {
    con.query("SELECT * from products", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
}

const getProductsByType = (req, res) => {
    let type = req.query.type;
    con.query("SELECT * from products WHERE type = ? ", [type], (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
}

// Get shirt by ID
const getProduct = (req, res) => {
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
}

module.exports = { getBestSellers, getProducts, getProductsByType, getProduct }
