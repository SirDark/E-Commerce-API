const createTokenUser = (user) => {
    const tokenUser = {name: user.name, email: user.email, userId: user._id, role: user.role}
    return tokenUser
}

module.exports = createTokenUser