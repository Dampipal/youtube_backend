const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");

const dislikeSchema = new mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
  video: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Video,
    },
  ],
  dislikedAt: {
    type: timestamps,
  },
});

const Dislike = mongoose.model("Dislike", dislikeSchema);
module.exports = Dislike;
