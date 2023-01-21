const mongoose = require('mongoose')

const postShcema = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true }
})

module.exports = mongoose.model('Post', postShcema);