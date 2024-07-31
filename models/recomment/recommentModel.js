const mongoose = require("mongoose");

const recommentSchema = new mongoose.Schema({}, { timestamps: true });

const Recomment = mongoose.model("Recomment", recommentSchema);
module.exports = Recomment;
