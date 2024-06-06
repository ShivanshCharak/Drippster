const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE)

router.get("/config",(req,res)=>{
    res.send({pkey:process.env.PUBLIC_KEY_STRIPE})
})
router.post("/create-payment-intent",async (req,res)=>{
    try{
        
        // console.log(req.body()
        const paymentIntent = await stripe.paymentIntents.create({
            currency:'inr',
            amount:2000,
        })
        // console.log(paymentIntent)
        res.send({
            clientSecret:paymentIntent.client_secret
        })
    }catch(err){
        res.status(400).send({err:err.message})
    }

})

module.exports = router