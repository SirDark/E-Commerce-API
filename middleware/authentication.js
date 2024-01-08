const CustomError = require('../errors')
const {isTokenValid} = require('../utils')

const authenticateUser = async (req,res,next) => {
    const token = req.signedCookies.token
    if(!token)
        throw new CustomError.UnauthenticatedError('Authentication Failed, Token Not Present')

    try {
        const {name, userId, role, email} = isTokenValid({token})
        req.user = {name, userId, role, email}
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication Failed')
    }

}

module.exports = authenticateUser