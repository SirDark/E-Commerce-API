const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "name is required"],
        maxLength: [100, 'Can not be longer than 100 characters']
    },
    price:{
        type: Number,
        required: [true, "price is required"],
        maxLength: [100, 'Can not be longer than 100 characters']
    },
    description:{
        type:String,
        required: [true, "description is required"],
        maxLength: [1000, 'Can not be longer than 100 characters']
    },
    image:{
        type:String,
        maxLength: [100, 'Can not be longer than 100 characters'],
        default:"/uploads/example.jpg"
    },
    category:{
        type:String,
        required:[true, 'please provide product category'],
        enum: ['office', 'kitchen', 'bedroom']
    },
    company:{
        type:String,
        required:[true, 'please provide company'],
        enum: {
            values: ['ikea', 'liddy', 'marcos'],
            message: 'company {VALUE} is not supported'
        }
    },
    colors:{
        type:[String],
        default:['#222'],
        required: true
    },
    featured:{
        type:Boolean,
        default:false
    },
    freeShipping:{
        type:Boolean,
        default:false
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    inventory:{
        type:Number,
        required:true,
        default:15
    },
    averageRating:{
        type: Number,
        default:0
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals:true}})

productSchema.virtual('reviews',{
    ref:'Review',
    localField:'_id',
    foreignField:'product',
    justOne: false
})

productSchema.pre('deleteOne',{ document: true }, async function(next){
    await this.model('Review').deleteMany({product: this._id})
    console.log(this)
})

module.exports = mongoose.model('Product', productSchema)