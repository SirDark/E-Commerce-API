const Product = require('../models/product')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const path = require('path');

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
    if(!req.files) 
        throw new CustomError.BadRequestError('no image found')

    const image = req.files.image
    if(!image.mimetype.startsWith('image'))
        throw new CustomError.BadRequestError('Please upload image')

    const maxSize = 1024*1024
    if(image.size > maxSize)
        throw new CustomError.BadRequestError('Please upload image smaller than 1 mb')

    const imagePath = path.join(__dirname, '../public/uploads/'+ `${image.name}`)
    await image.mv(imagePath)
    res.json({image: `/uploads/${image.name}`})
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage
}