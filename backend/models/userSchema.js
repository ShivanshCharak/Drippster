const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        required: true,
        type: String,
        unique: true,
        lowercase: true,
    },
   
    refreshToken:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
        next()
    }
    return next()
})
userSchema.method.generateAccessToken = async (username)=>{
    return await jwt.sign(username,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
userSchema.method.comparePassword = async(password)=>{
    return await bcrypt.compare(password,this.password)
}
userSchema.method.generateRefreshToken = async (username)=>{
    this.refreshToken=  await jwt.sign(username,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'})
    return this.refreshToken
}

const User = mongoose.model('User', userSchema);
module.exports = User;
