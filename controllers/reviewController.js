const Review = require('../models/review')
const Product = require('../models/product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const {checkPermissions} = require('../utils')
const product = require('../models/product')

const createReview = async(req, res) => {
    const {product: productId} = req.body

    const isValidProduct = await product.findOne({_id:productId})
    if(!isValidProduct) 
        throw new CustomError.NotFoundError(`No Product with id: ${productId}`)

    const alreadySubmitted = await Review.findOne({
        product:productId,
        user:req.user.userId
    })

    if(alreadySubmitted)
        throw new CustomError.BadRequestError(`Already submitted review for product: ${productId}`)

    req.body.user= req.user.userId
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
}
const getAllReviews = async(req, res) => {
    const reviews = await Review.find({})
        .populate({path:'product', select: 'name company price'})
        .populate({path:'user', select: 'name'})
    res.json({reviews})
}
const getSingleReview = async(req, res) => {
    const review = await Review.findOne({_id: req.params.id})
        .populate({path:'product', select: 'name company price'})
        .populate({path:'user', select: 'name'})
    if(!review)
        throw new CustomError.NotFoundError(`No Review found with id: ${req.params.id}`)

    res.json({review})
}
const updateReview = async(req, res) => {
    const {title, comment, rating} = req.body
    if(!title || !comment || !rating)
        throw new CustomError.BadRequestError('please give comment, rating and title')
    const review = await Review.findOne({_id: req.params.id})
    if(!review)
        throw new CustomError.NotFoundError(`No Review found with id: ${req.params.id}`)

    checkPermissions(req.user, review.user)
    
    review.title = req.body.title
    review.comment = comment
    review.rating = rating
    await review.save()
    res.json({review})
    
}
const deleteReview = async(req, res) => {
    const review = await Review.findOne({_id: req.params.id})
    if(!review)
        throw new CustomError.NotFoundError(`No Review found with id: ${req.params.id}`)
    
    checkPermissions(req.user, review.user)
    
    await review.remove()

    res.json({msg:'done'})
    
}

const getSingleProductReviews = async(req,res) => {
    const {id:productId} = req.params
    const reviews = await Review.find({product:productId})
    res.status(StatusCodes.OK).json({reviews, count: reviews.length})
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    getSingleProductReviews
}