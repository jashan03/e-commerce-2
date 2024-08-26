const router = require("express").Router();
const Cart= require("../models/Cart")

const {
    verifyToken,
    verifyTokenAndAuthorisation,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

//CREATE
router.post("/", verifyToken,async (req,res)=>{
    const newCart = new Cart(req.body)

    try{
       const savedCart = await newcart.save();
       res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json({err})
    }

})

//UPDATE
router.put('/:id', verifyTokenAndAuthorisation,async(req,res)=>{
    // if password is being updated then hash it first before storing
    
    try{
         const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
            {
            $set:req.body //upadte the entire req body using whatever data is being entered
         },
         {
            new:true
        })  // to return updated body
         res.status(200).json({updatedCart})
    }catch(err){
        res.status(500).json({err})
    }
   
    
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorisation, async (req,res)=>{
    try{
       await Cart.findByIdAndDelete(req.params.id)
       res.status(200).json("Cart has been deleted")
    }catch(err){
       res.status(500).json(err)
    }
})

//GET USER CART
router.get('/find/:userId',verifyTokenAndAuthorisation, async (req,res)=>{
    try{
      const cart= await Cart.findOne({iserID:req.params.userId})
     
       
      res.status(200).json({
        message:"Cart is fetched successfully",
        product
       
      })
       
    }catch(err){
       res.status(500).json(err)
    }
})

//GET ALL CARTS OF ALL USERS

router.get("/carts" , verifyTokenAndAdmin, async (req,res)=>{
    try{
         const carts = await Cart.find();
         res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router