const {StatusCodes} = require('http-status-codes')
const User = require('../models/user')
const CustomError = require('../errors')
const {createJWT} = require('../utils')

const login = async (req,res) => {
    res.send('login')
}
const register = async (req,res) => {
    console.log(req.body)
    const {email, name, password} = req.body
    // first registered user is an admin
    const isFirstAccount = (await User.countDocuments({})) === 0
    const role = isFirstAccount ? 'admin' : 'user'

    const newUser = await User.create({email, name, password, role})
    const tokenUser = {name: newUser.name, email: newUser.email, role: newUser.role}
    const jwt = createJWT({payload: tokenUser})

    const oneDay = 1000*60*60*24

    res.cookie('token', jwt, {
        httpOnly:true,
        expires: new Date(Date.now()+oneDay)
    })

    res.status(StatusCodes.CREATED).json({tokenUser})
}
const logout = async (req,res) => {
    res.send('logout')
}

module.exports = {
    login,
    register,
    logout
}