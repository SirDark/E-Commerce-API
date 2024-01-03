const { default: mongoose } = require("mongoose");
var validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be given'],
        maxlength: 50,
        minlength: 3,
    },
    password:{
        type:String,
        required: [true, 'password must be given'],
        minlength: 6,
    },
    email: {
        type:String,
        required: [true, 'email must be given'],
        validate: {
            validator: validator.isEmail,
            message: 'please provide valid email',
        },
        unique: true,
    },
    role: {
        type:String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

userSchema.pre('save', async function (){
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

//moved this one to utils
/*userSchema.methods.createJwt = function (){
    return jwt.sign(
        {userId: this._id, email: this.email},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}*/

userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', userSchema)