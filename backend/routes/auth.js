const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require('bcryptjs');
const z = require("zod")
const jwt =  require("jsonwebtoken")

const userSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

router.post("/register",async(req,res)=>{
    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({
            message: "Validation failed",
            details: validation.error.errors,
        });
    }

    
    try{
      const saltRounds=10;
      const hashedPassword = await bcrypt.hash(req.body.password,saltRounds)
       const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
     });

     
        const savedUser = await newUser.save();
      

        const accessToken = jwt.sign({
          id:savedUser.id,
          isAdmin:savedUser.isAdmin,
        } , process.env.JWT_SECRET,
        {expiresIn:"3d"}
      )
        // puts everything except pass u got from user ie(findOne query) into others object
        //doc allows destructing + mongoose_doc to object
        const {password, ...others} = savedUser._doc;
         
        res.status(201).json({
          message:"user creation is successful",
          ...others,
          accessToken
         
        })
  
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while creating user"
        });
     }

})

router.post("/login", async(req,res)=>{
    try{
      const user = await User.findOne({username: req.body.username});
      if(!user){
        return res.status(404).json({
            message:"User doesnt exist"
        })
       
      }
      const passwordMatch = await bcrypt.compare(req.body.password,user.password);
      if(!passwordMatch){
        return res.status(401).json({
            message:"invalid credentials"
        })
      }

      const accessToken = jwt.sign({
        id:user.id,
        isAdmin:user.isAdmin,
      } , process.env.JWT_SECRET,
      {expiresIn:"3d"}
    )
      // puts everything except pass u got from user ie(findOne query) into others object
      const {password, ...others} = user._doc;
       
      res.status(200).json({
        message:"user verification is successful",
        ...others,
        accessToken
       
      })

    }catch(err){
      console.log(err)
      res.status(500).json({
        message: "an error occurred"
      })
    }
})


module.exports = router