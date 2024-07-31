const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({}, { timestamps: true });

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
