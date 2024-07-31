const mongoose = require("mongoose");

const mentionSchema = new mongoose.Schema({});

const Mention = mongoose.model("Mention", mentionSchema);
module.exports = Mention;
