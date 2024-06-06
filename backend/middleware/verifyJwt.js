const jwt = require('jsonwebtoken')
const verifyJwt= (req,res,next)=>{
      const token = req.headers['authorization'].split(' ')[1]
      if(!token){
        res.status(500).send({message:"Token missing"})
      }
      jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err) res.status(500).send({message:"session expired relogin"});
        req.user=decoded.username
        next()
      })
    // console.log(req.headers)

}

module.exports=verifyJwt