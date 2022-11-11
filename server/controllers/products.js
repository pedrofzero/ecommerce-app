let prisma = require('../db')

const getBestSellers = async (req, res) => {
    const bestSellers = await prisma.sneakers.findMany({
        skip: Math.floor(Math.random() * 3)
    })
    res.send(bestSellers)
}

// Get all shirts
const getProducts = (req, res) => {
    pool.query("SELECT * from Sneakers", (err, result, fields) => {
        if (err) throw err;
        res.send(result.rows)
    })
}

const getProductsByType = (req, res) => {
    let type = req.query.type;
    pool.query("SELECT * from Sneakers WHERE type = ? ", [type], (err, result, fields) => {
        if (err) throw err;
        res.send(result.rows)
    })
}

// Get shirt by ID
const getProduct = (req, res) => {
    let id = req.query.id;
    prisma.sneakers.findUnique({
        where: {
            id
        }
    })

    pool.query("SELECT * from Sneakers WHERE id = (?) ", [id], (err, result, fields) => {
        if (result) {
            res.send(result.rows);
        }
        if (err) {
            console.log(err);
            res.send(err);
        }
    })
}

module.exports = { getBestSellers, getProducts, getProductsByType, getProduct }
