const express=require('express');
const router=express.Router();

const{createBooks}=require("../controllers/createBooks");
const{getBooks,getBooksById}=require("../controllers/getBooks");
const{updateBooks}=require("../controllers/updateBooks");
const{deleteBooks}=require("../controllers/deleteBooks");

router.post("/createBooks",createBooks);
router.get("/getBooks",getBooks);
router.get("/getBooks/:id",getBooksById);
router.put("/updateBooks/:id",updateBooks);
router.delete("/deleteBooks/:id",deleteBooks);

module.exports=router;