const Books=require('../models/books');

exports.createBooks=async(req,res)=>{
    try{
     const{title,author,genre,publication_Year,ISBN_number}=req.body;

     const books= await Books.create({title,author,genre,publication_Year,ISBN_number});
     
     res.status(200).json({
        success:true,
        data:books,
        message:"Entry created successfully"
     })

    }catch(error){
     res.status(500).json({
        success:false,
        data:"Internal server error",
        message:error.message
    })
    }
}