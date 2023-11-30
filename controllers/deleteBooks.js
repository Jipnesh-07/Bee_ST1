const Books=require('../models/books');

exports.deleteBooks=async(req,res)=>{
    try{
        const{id}=req.params;
        const books=await Books.findByIdAndDelete({_id:id});
        if(!books){
            res.status(404).json({
                success:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}