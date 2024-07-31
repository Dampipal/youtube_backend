const mongoose = require("mongoose");

const savedSchema = new mongoose.Schema({}, { timestamp: true });

const Saved = mongoose.model("Saved", savedSchema);
module.exports = Saved;
