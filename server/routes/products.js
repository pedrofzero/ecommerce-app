const express = require('express')
const { getBestSellers, getProducts, getProductsByType, getProduct } = require('../controllers/products')
const router = express.Router()

// router.route('/').get(getGame).post(addGame)
// router.route('/:id').delete(deleteGame).put(updateGame)

// // GET games list 

router.get('/getBestSellers', getBestSellers)

router.get('/getProducts', getProducts)

router.get('/getProductsByType', getProductsByType)

router.get('/getProduct', getProduct)


module.exports = router