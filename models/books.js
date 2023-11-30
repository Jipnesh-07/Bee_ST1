const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
    },
    publication_Year:{
        type:Number,
    },
    ISBN_number:{
        type:Number,
        required:true,
    }

})

module.exports=mongoose.model("Student",studentSchema);