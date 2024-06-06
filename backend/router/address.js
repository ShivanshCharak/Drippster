// const router = require('express')
const express = require('express')
const router = express.Router()
const registerAddress = require('../controller/address')

router.post("/createAddress",registerAddress)

module.exports = router