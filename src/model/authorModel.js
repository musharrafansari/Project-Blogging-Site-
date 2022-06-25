let mongoose = require("mongoose");
 
const authorSchema = mongoose.Schema({
    fname :{ 
        type:String,
        required:true
       
    },
    lname:{
       type:String,
       required:true,
       
    },
    title:{
        type:String,
        enum:["Mr", "Mrs", "Miss"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    pasword:{
        type:String,
        required:true,
        trim:true
    }
    
},
{timestamps:true})

module.exports = mongoose.model("Author",authorSchema)