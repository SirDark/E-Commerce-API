const Product = require('../models/product')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const createProduct = async (req,res) => {
    req.body.user = req.user.userId
    const newprod = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({newprod})
}
const getAllProducts = async (req,res) => {
    const products = await Product.find({})
    res.json({products})
}
const getSingleProduct = async (req,res) => {
    const product = await Product.findById(req.params.id)
    if(!product)
        CustomError.NotFoundError(`Product with ${req.params.id} not found`)
    res.json({product})
}
const updateProduct = async (req,res) => {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})

    if(!product) throw new CustomError.NotFoundError(`Product with ${req.params.id} not found`)

    res.json({product})
}
const deleteProduct = async (req,res) => {
    await Product.deleteOne({_id: req.params.id})
    res.json({msg:"done"})
}
const uploadImage = async (req,res) => {
    res.send('uploadProduct')
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage
}