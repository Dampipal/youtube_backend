const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({}, { timestamps: true });

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
