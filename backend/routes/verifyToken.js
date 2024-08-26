const jwt = require("jsonwebtoken")

const verifyToken =(req,res,next)=>{
    const authHeader = req.headers.token

    if(authHeader){
        const token = authHeader.split(" ")[1];
        // user  =decoded payload ie user info encoded in token
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
           if(err) res.status(403).json("Token is not valid");
           req.user=user; //imp
           next();
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }
}

const verifyTokenAndAuthorisation =(req,res,next)=>{
    // first verify user usinh jwt
     verifyToken(req,res,()=>{
        // after verification of jwt
        // checks if authenticated user is either user whose data is being accessed
        // or an admin
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not an admin/authorised user")
        }

     })
}

const verifyTokenAndAdmin =(req,res,next)=>{
    // first verify user using jwt
     verifyToken(req,res,()=>{
        // after verification of jwt
        // or an admin
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not an admin")
        }

     })
}

module.exports = {verifyToken,
                verifyTokenAndAuthorisation,
                verifyTokenAndAdmin
};