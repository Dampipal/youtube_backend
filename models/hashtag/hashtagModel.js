const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
module.exports = Hashtag;
