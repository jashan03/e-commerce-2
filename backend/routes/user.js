const router = require("express").Router();
const User= require("../models/User")
const bcrypt = require('bcryptjs');
const {
    verifyToken,
    verifyTokenAndAuthorisation,
    verifyTokenAndAdmin,
  } = require("./verifyToken");



//UPDATE
router.put('/:id', verifyTokenAndAuthorisation,async(req,res)=>{
    // if password is being updated then hash it first before storing
    if(req.body.password){
         saltRounds=10;
         req.body.password= await bcrypt.hash(req.body.password,saltRounds)    
    }
    try{
         const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body //upadte the entire req body using whatever data is being entered
         },{new:true})  // to return updated body
         res.status(200).json({updatedUser})
    }catch(err){
        res.status(500).json({err})
    }
   
    
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorisation, async (req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id)
       res.status(200).json("user has been deleted")
    }catch(err){
       res.status(500).json(err)
    }
})

//GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req,res)=>{
    try{
      const user= await User.findById(req.params.id)
      const {password, ...others} = user._doc;
       
      res.status(200).json({
        message:"user is fetched successfully",
        others
       
      })
       
    }catch(err){
       res.status(500).json(err)
    }
})

//GET ALL USERS
router.get('/', verifyTokenAndAdmin, async (req,res)=>{
    // if the req contains a query parametr called "new=true" then
    //return the lastest created user else
    //return all the users
    const query = req.query.new;
    try{
      const users= query //id:-1 --> desc order ie newest created user is first
      ? await User.find().sort({_id:-1}).limit(1)
      : await User.find()
       
      res.status(200).json({
        message:"user is fetched successfully",
        users
       
      })
       
    }catch(err){
       res.status(500).json(err)
    }
})

//GET USER STATS - returns no of users per month where the id = month 
//and total = no of user registered during that month
router.get("/stats", verifyTokenAndAdmin, async (req,res)=>{
    // get dates corresponding to one year ago from current date
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try{
        const data = await User.aggregate([
            {$match :{createdAt:{$gte:lastYear}}}, //gte = greater than equal to 
            {
                $project:{  // creates a new field by extracting month from created at
                    month:{$month:"$createdAt"},
                },
            },
            {
                $group:{  // grp users by month and count users in each month
                    _id:"$month", 
                    total:{$sum:1}, // to sum every register user in that month  in past 1 year
                }
            }
        ]);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router