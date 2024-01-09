const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:[true, 'please give a rating']
    },
    title:{
        type:String,
        default: ""
    },
    comment:{
        type:String,
        default: ""
    },
    user:{
        type: mongoose.Types.ObjectId,
    },
    product:{
        type: mongoose.Types.ObjectId,
        required:true
    }
}, {timestamps:true})

models.exports = mongoose.model('Review', reviewSchema)