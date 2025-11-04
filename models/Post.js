const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    { title: String, body: String }
)


const Post = mongoose.model('Post', userSchema);

 module.exports = Post