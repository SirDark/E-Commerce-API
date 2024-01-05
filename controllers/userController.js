const { StatusCodes } = require('http-status-codes')
const User = require('../models/user')
const { NotFoundError } = require('../errors')


const getAllUsers = async (req, res) =>{
    const users = await User.find({role:'user'}).select('name').select('email')
    res.status(StatusCodes.OK).json(users)
}

const getSingleUser = async (req, res) =>{
    const user = await User.find({_id:req.params.id}).select('name').select('email')
    if(!user) throw new NotFoundError(`User not found with id: ${req.params.id}`)
    res.status(StatusCodes.OK).json(user)
}

const showCurrentUser = async (req, res) =>{
    res.send('showCurrentUser')
}

const updateUser = async (req, res) =>{
    res.send('updateUser')
}

const updateUserPassword = async (req, res) =>{
    res.send('updateUserPassword')
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}