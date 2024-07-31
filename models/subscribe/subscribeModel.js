const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({}, { timestamps: true });

const Subscribe = mongoose.model("Subscribe", subscribeSchema);
module.exports = Subscribe;
