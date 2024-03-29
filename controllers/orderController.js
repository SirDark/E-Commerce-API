const Order = require('../models/order')
const Product = require('../models/product')

const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const {checkPermissions} = require('../utils')
const order = require('../models/order')

//I do not plan to make a frontend for this app so I am using a fake stripe function
const fakeStripeAPI = async ({amount, currency}) => {
    const client_secret ='somethinsomething'
    return {client_secret, amount}
}

const getAllOrders = async (req, res) => {
    const orders = await Order.find({})
    res.json({orders})
}
const getSingleOrder = async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order)
        throw new CustomError.NotFoundError(`order with id ${req.params.id} not found`)
    checkPermissions(req.user, order.user)
    res.json({order})
}
const getCurrentUserOrders = async (req, res) => {
    const order = await Order.find({user:req.user.userId})
    if(!order)
        throw new CustomError.NotFoundError(`No Orders found`)
    res.json({order})
}
const createOrder = async (req, res) => {
    const {items: cartItems, tax, shippingFee} = req.body
    if(!cartItems || cartItems.length < 1)
        throw new CustomError.BadRequestError('No cart items provided')

    if(!tax || !shippingFee)
        throw new CustomError.NotFoundError('Please provide tax and shipping fee')

    let orderItems = []
    let subTotal = 0

    for (const item of cartItems) {
        const dbProduct = await Product.findOne({_id:item.product})
        if(!dbProduct)
            throw new CustomError.NotFoundError(`No product id found with id: ${item.product}`)
        const {name, price, image, _id} = dbProduct
        const singleOrderItem = {
            amount:item.amount,
            name,
            price,
            image,
            product: _id
        }
        //add item to order
        orderItems = [...orderItems, singleOrderItem]
        //calculate subtotal
        subTotal += item.amount * price
    }
    const total = tax + shippingFee + subTotal
    //get client secret
    const paymentIntent = await fakeStripeAPI({
        amount:total,
        currency:'huf'
    })

    const order = await Order.create({
        orderItems, 
        total, 
        subtotal: subTotal, 
        shippingFee, 
        tax, 
        clientSecret: paymentIntent.client_secret, 
        user:req.user.userId
    })

    res.status(StatusCodes.CREATED).json({order, clientSecret:order.clientSecret})
}
const updateOrder = async (req, res) => {
    const {id: orderId} = req.params
    const {paymentIntentId} = req.body
    if(!paymentIntentId)
        throw new CustomError.BadRequestError('payment id must be given')
    const order = await Order.findOne({_id:orderId})
    if(!order)
        throw new CustomError.NotFoundError(`order with id ${orderId} not found`)
    checkPermissions(req.user, order.user)
    order.paymentIntentId = paymentIntentId
    order.status = 'paid'
    await order.save()
    res.json({order})
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}