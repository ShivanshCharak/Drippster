const  { ApiError } =  require( "../utils/ApiError")
const  User = require('../models/userSchema.js');
const  ApiResponse  = require("../utils/ApiResponse.js");
 async function handleSignup(req,res){
     const {username,password,email} = req.body
     if(
         [username,password,email].some((value) => value ===" ")
        ){
            return new ApiError("Username,Password or email is required",400)
        }
        const userAlreadyExists = await User.findOne({username});
        console.log("hit") 
        
        if(userAlreadyExists){
            console.log("user already exists")
            res.status(402).send({message:"User exists"})
            // throw new ApiError("User already exists",400)
        }
        
        const user = await User.create({
            username,
            password,
            email,
        })
    await user.save()
    
    let successFullySaved = await User.findOne({username})
    if(successFullySaved) {
        
        console.log(successFullySaved)
        return res.status(201).send({message:"User created successfully"})
      
    }
    // return res.send(201,"User created successfully")
    throw new ApiError("500","Internal Server Error while creatinf user")
}
async function handleSignin(req,res){
    console.log("hey")
    const {email,password} = req.body
    if ([email,password].some((value)=>value === "")){
        return new ApiError("Email and Password are required",400)
    }
    const foundUser  = User.findOne({username})
    if(!foundUser) return new ApiError("User not found",400)
    const isSame  = foundUser.comparePassword(foundUser.password)   
    console.log(isSame)
}
module.exports= {handleSignup,handleSignin}