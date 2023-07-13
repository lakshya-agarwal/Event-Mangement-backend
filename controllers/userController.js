const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const bcrytp = require("bcrypt")
const jwt = require("jsonwebtoken")
//@desc login user
//@route GET/user/login
//@access public
const login = asyncHandler(async(req,res) =>{
    console.log(req.body);
    const {userName,password} = req.body;
    if(!userName || !password ){  
        res.status(400)
        throw new Error("userName is mandatory")
    }
    try {
        const user = await User.findOne({userName})
        if(user && (await bcrytp.compare(password,user.password))){
            console.log("dd")
            const accessToken = jwt.sign({
                user:{
                    userName:user.userName,
                    firstName:user.firstName,
                    lastName:user.lastName
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:"10m"
            })
            res.status(200).json({accessToken})
        }else{
            res.status(400);
            throw new Error("email or pasword not valid")
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }
});


const createUser = asyncHandler(async(req,res) =>{
    console.log(req.body);
    const {id,userName,firstName,lastName,DOB,password,email,address} = req.body;
    if(!userName || !password ){  
        res.status(400)
        throw new Error("userName is mandatory")
    }
    try {
        const encryptPassword = await bcrytp.hash(password,10); 
        const userCreated = await User.create({
            id,userName,firstName,lastName,DOB,email, password:encryptPassword
        })
        if(userCreated){
            res.status(200).json({_id:userCreated.id});
        }
        else{
            res.status(400);
            throw new Error("error in creating USER")
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json("error in creating USER")
    }
   
   
});

module.exports = {login,createUser}