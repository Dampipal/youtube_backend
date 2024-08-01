const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");

const likeSchema = new mongoose.Schema(
  {
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
    likedAt: {
      type: timestamps,
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
