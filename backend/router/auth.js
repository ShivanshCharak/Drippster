const app = require('express')
const router = app.Router()
const auth = require('../controller/auth')

// function Auth(){
    console.log("hit")
    router.post("/signup",auth.handleSignup)
    router.post("/signin",auth.handleSignin)
    // router.post("/signup",require('../controller/auth/signup.js'))
// }
module.exports = router