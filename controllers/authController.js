const {StatusCodes} = require('http-status-codes')
const User = require('../models/user')
const {attachCookiesToResponse} = require('../utils')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const login = async (req,res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('please provide email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) throw new UnauthenticatedError('Invalid password')
    const tokenUser = {name: user.name, email: user.email, role: user.role}
    attachCookiesToResponse({res, user: tokenUser})

    res.status(StatusCodes.OK).json({msg:'ok'})
}

const register = async (req,res) => {
    console.log(req.body)
    const {email, name, password} = req.body
    // first registered user is an admin
    const isFirstAccount = (await User.countDocuments({})) === 0
    const role = isFirstAccount ? 'admin' : 'user'

    const newUser = await User.create({email, name, password, role})
    const tokenUser = {name: newUser.name, email: newUser.email, role: newUser.role}
    attachCookiesToResponse({res, user: tokenUser})
    res.status(StatusCodes.CREATED).json({tokenUser})
}

const logout = async (req,res) => {
    res.cookie('token', 'logout',{
        httpOnly:true,
        expires:new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg: 'user logged out'})
}

module.exports = {
    login,
    register,
    logout
}