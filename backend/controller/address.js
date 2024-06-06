const Address=require("../models/addressSchema")
async function registerAddress(req, res) {
    console.log(req.body)
    const { state, city, zipCode, streetAddress, country } = req.body;
    try {
        const address = new Address({
            state,
            city,
            zipCode,
            streetAddress,
            country
        });
        const data = await address.save();
        console.log(data);
        return res.status(200).json({ message: "Address created successfully", data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = registerAddress;