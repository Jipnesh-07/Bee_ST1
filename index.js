const express=require('express');
const app=express();
require("dotenv").config();

app.use(express.json());

const PORT =process.env.PORT || 3000;

const dbConnect=require("./config/database");
dbConnect();

const booksRoutes=require("./routes/booksRoutes");
app.use("/api",booksRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})
