let prisma = require('../db')

const getBestSellers = async (req, res) => {
    const bestSellers = await prisma.sneakers.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    })
    res.send(bestSellers)
}

const getAllProducts = async (req, res) => {
    const allProducts = await prisma.sneakers.findMany({})
    res.send(allProducts)
}

// Get all shirts
const getMenProducts = async (req, res) => {
    const menProducts = await prisma.sneakers.findMany({
        where: {
            gender: 'male'
        }
    })
    res.send(menProducts)
}

const getWomenProducts = async (req, res) => {
    const womenProducts = await prisma.sneakers.findMany({
        where: {
            gender: 'female'
        }
    })
    res.send(womenProducts)
}

// Get shirt by ID
const getProduct = async (req, res) => {
    let id = req.body.id;

    const product = await prisma.sneakers.findUniqueOrThrow({
        where: {
            id: id
        }
    })
    res.send(product)
}

module.exports = { getBestSellers, getMenProducts, getWomenProducts, getProduct, getAllProducts }
