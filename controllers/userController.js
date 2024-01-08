const { StatusCodes } = require('http-status-codes')
const User = require('../models/user')
const { NotFoundError,BadRequestError,UnauthenticatedError } = require('../errors')
const {attachCookiesToResponse, createTokenUser, checkPermissions} = require('../utils')


const getAllUsers = async (req, res) =>{
    const users = await User.find({role:'user'}).select('name').select('email')
    res.status(StatusCodes.OK).json(users)
}

const getSingleUser = async (req, res) =>{
    const user = await User.find({_id:req.params.id}).select('name').select('email')
    if(!user) throw new NotFoundError(`User not found with id: ${req.params.id}`)
    checkPermissions(req.user, user[0]._id)
    res.status(StatusCodes.OK).json(user)
}

const showCurrentUser = async (req, res) =>{
    res.status(StatusCodes.OK).json({user:req.user})
}

const updateUser = async (req, res) =>{
    const {name, email} = req.body
    if(!name || !email)
        throw new BadRequestError('name and email must be provided')
    const user = await User.findOneAndUpdate({_id:req.user.userId}, {name,email}, {new:true, runValidators:true})
    if(!user) throw new UnauthenticatedError('Invalid Credentials')
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({res, user: tokenUser})

    res.json({msg:"updated"})
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