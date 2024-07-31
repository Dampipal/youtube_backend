const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({}, { timestamps: true });

const History = mongoose.model("History", historySchema);
module.exports = History;
