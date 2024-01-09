const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:[true, 'please give a rating']
    },
    title:{
        type:String,
        trim:true,
        required:[true, 'please provide a title'],
        maxLength: 100
    },
    comment:{
        type:String,
        required:[true, 'please provide a comment'],
        maxLength: 1000
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    }
}, {timestamps:true})
reviewSchema.index({product:1, user:1}, {unique:true})


models.exports = mongoose.model('Review', reviewSchema)