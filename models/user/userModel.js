const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({}, { timestamp: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
