const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")
const validateToken = async(req,res,next)=>{
    try {
        console.log("in validate token handler")
        let token;
        let authHeader = req.headers.Authorization ||  req.headers.authorization;
        console.log("auth is present",req.headers)
        if(authHeader && authHeader.startsWith("Bearer")){
            token = authHeader.split(" ")[1],
            console.log("got the token")
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded) =>{
                if(err){
                    res.status(401);
                    throw new Error("User not Authorizws")
                }
                console.log(decoded)
                req.user = decoded.user;
                next();
            } )
        }
        else{
            res.status(400);
            throw new Error("not authorized");
        }
    } catch (error) {
        next(error)
    }
    
}

module.exports = validateToken