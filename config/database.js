const mongoose = require('mongoose')

require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DATABASE CONNECTED")})
    .catch((err)=>{
        console.log("DB Connection issues")
        console.log(err);
    })
}

module.exports=dbconnect;
