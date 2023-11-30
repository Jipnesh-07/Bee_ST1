const Books=require('../models/books');

exports.updateBooks=async(req,res)=>{
    try{
        const{id}=req.params;
        const{}=req.body;

        const books=await Books.findByIdAndUpdate({_id:id},{title,author,genre,publication_Year,ISBN_number})

        const updatedBooks=await Books.findById({_id:id});
        res.status(200).json({
            success:true,
            data:updatedBooks,
            message:"Entry updated successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}