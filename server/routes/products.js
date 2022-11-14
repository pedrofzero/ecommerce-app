const express = require('express')
const { getBestSellers, getWomenProducts, getMenProducts, getProduct } = require('../controllers/products')
const router = express.Router()

// router.route('/').get(getGame).post(addGame)
// router.route('/:id').delete(deleteGame).put(updateGame)

// // GET games list 

router.get('/getBestSellers', getBestSellers)

router.get('/getMenProducts', getMenProducts)

router.get('/getWomenProducts', getWomenProducts)

router.post('/getProduct', getProduct)


module.exports = router