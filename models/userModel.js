const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    phnnumber: {
        type: Number,
        required: true 
    },
    address: {
        type: String,
        required: true 
    }
})
const userModel = mongoose.model('Richa Database', userSchema)
module.exports = userModel;