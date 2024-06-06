const mongoose = require("mongoose");

const Landmark = {
    type: String,
    required: true
};
const city = {
    type: String,
    required: true
};
const country = {
    type: String,
    required: true
};
const State = {
    type: String,
    required: true
};
const zipCode = {
    type: String,
    required: true
};
const addressSchema = new mongoose.Schema({
    state: State,
    city: city,
    zipCode: zipCode,
    streetAddress: Landmark,
    country: country
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address