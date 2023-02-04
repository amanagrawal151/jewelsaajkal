const mongoose = require("mongoose")  ; 

const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true,"please enter product name"] ,
        trim : true 
    },
    description : { 
        type : String , 
        required : [true , "please enter product description"]
    },
    price : {
        type : Number , 
        required : [true , "please enter product price"] , 
        maxLength : [8 , "price can't be more than 8 digits"]
    },
    ratings : {
        type : Number , 
        default : 5
    },
    images : [
        {
        public_id : {
            type : String ,
            required : true 
        } , 
        url : {
            type : String , 
            required : true 
        }
    }
    ],
    category : {
        type : String ,
        required : [true , "please enter product category"] ,
    },
    stock : {
        type : Number , 
        required : [true , "please enter product stock"] ,
        maxlength : [5 , "stock cannot exceed more than 5 digits"] , 
        default : 1 
    } , 
    numberofreviews : { 
        type : Number , 
        default : 0 
    },
    reviews : [
        {
            user : {
                type : mongoose.Schema.ObjectId , 
                ref: "User" , 
                required : true 
            },
            name : {
                type: String ,
                required : true  
            },
            rating : {
                type : Number , 
                required : true 
            },
            comment : { 
                type : String ,
                required : true 
            }
        }
    ],

    user : {
        type : mongoose.Schema.ObjectId , 
        ref: "User" , 
        required : true 
    },

    createdAt : {
        type : Date ,
        default : Date.now 
    }
})

module.exports = mongoose.model("Product" , productSchema)