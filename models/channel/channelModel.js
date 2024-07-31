const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({}, { timestamps: true });

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
