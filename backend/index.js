const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Invoke dotenv.config()
const stripe = require("stripe")(process.env.PUBLIC_KEY_STRIPE);
const cors = require('cors');
const mongoose = require('mongoose');
const verifyJwt = require("./middleware/verifyJwt.js");

app.use(express.json())
mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("Successfully connected")
}).catch(err=>console.log(err))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
console.log("hit")
const PORT = process.env.PORT || 3000;
// app.use("/stripe",require("./stripeConfig.js"))
app.use("/auth",require('./router/auth.js'))
// app.use("/userDetails",verifyJwt,require("./router/address.js"))
// app.use("/logout",require("./controller/logoutController.js"))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
