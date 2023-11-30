const Books=require('../models/books');

exports.getBooks=async(req,res)=>{
    try{
        const books=await Books.find({});

        res.status(200).json({
            success:true,
            data:books,
            message:"Data fetched successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
   
}


exports.getBooksById=async(req,res)=>{
    try{
        const{id}=req.params;
        const books=await Books.findById({_id:id});

        if(!books){
          return res.status(404).json({
            success:false,
            message:"No data with given id"
          })
        }

        res.status(200).json({
            success:true,
            data:books,
            message:"Data fetched with given id"
        })
    }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
    }
}