const { StatusCodes } = require('http-status-codes')
const User = require('../models/user')
const { NotFoundError,BadRequestError,UnauthenticatedError } = require('../errors')


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
    res.status(StatusCodes.OK).json({user:req.user})
}

const updateUser = async (req, res) =>{
    res.send('updateUser')
}

const updateUserPassword = async (req, res) =>{
    const {userId} = req.user
    const {oldPassword, newPassword} = req.body
    if(!oldPassword || !newPassword)
        throw new BadRequestError('please provide old and new password')
    const user = await User.findById(userId)
    if(!user)
        throw new UnauthenticatedError('Invalid Credentials')
    if(!user.comparePassword(oldPassword)) 
        throw new UnauthenticatedError('Invalid password')
    
    user.password=newPassword
    await user.save()

    res.json({msg:"done"})
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}