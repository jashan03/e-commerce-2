const router = require("express").Router();
const Order= require("../models/Order")

const {
    verifyToken,
    verifyTokenAndAuthorisation,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

//CREATE
router.post("/", verifyToken,async (req,res)=>{
    const newOrder = new Order(req.body)

    try{
       const savedOrder = await newOrder.save();
       res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json({err})
    }

})

//UPDATE
router.put('/:id', verifyTokenAndAdmin,async(req,res)=>{
    
    try{
         const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
            {
            $set:req.body //upadte the entire req body using whatever data is being entered
         },
         {
            new:true
        })  // to return updated body
         res.status(200).json({updatedOrder})
    }catch(err){
        res.status(500).json({err})
    }
   
    
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req,res)=>{
    try{
       await Order.findByIdAndDelete(req.params.id)
       res.status(200).json("Order has been deleted")
    }catch(err){
       res.status(500).json(err)
    }
})

//GET USER ORDER  
router.get('/find/:userId', verifyTokenAndAuthorisation, async (req,res)=>{
    try{
      const orders= await Order.find({userId:req.params.id})
      res.status(200).json({
        message:"Product is fetched successfully",
        orders
       
      })
       
    }catch(err){
       res.status(500).json(err)
    }
})

// //GET ALL ORDERS
router.get('/',verifyTokenAndAdmin,async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
    
})

//GET MONTHLY INCOME
// comapre incomes from last 2 month 
router.get("/income", verifyTokenAndAdmin, async (req,res)=>{
//     Original Date: Sat Aug 24 2024 10:45:00 GMT+0000 (Coordinated Universal Time)
// After setMonth ie last month: Wed Jul 24 2024 10:45:00 GMT+0000 (Coordinated Universal Time)
    const date = new Date();  // current date
    const lastMonth = new Date(date.setMonth(date.getMonth()-1)); // it modifies the date with month = month-1 n stores it in last month
    const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth()-1)); // takes current date n sets it month to month - 1 of last month ie current month-2 = prev month

    try{
      const income = await Order.aggregate([
        {$match: {createdAt:{$gte:previousMonth}}}, //filter
        {
            $project:{ //modification
                month:{$month: "$createdAt"},
                sales: "$amount"
            },
        },
        {
            $group: { // group modified data
                _id: "$month",
                total:{$sum :"$sales"},
            },
        },
      ]);
      res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router