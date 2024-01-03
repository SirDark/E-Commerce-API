const { default: mongoose } = require("mongoose");
var validator = require('validator')

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


module.exports = mongoose.model('User', userSchema)