const mongoose = require("mongoose");
const Channel = require("../channel/channelModel");
const Video = require("../video/videoModel");
const Like = require("../like/likeModel");
const Comment = require("../comment/commentModel");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    subscribedChannel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Channel,
      },
    ],
    uploadedVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Video,
      },
    ],
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Video,
      },
    ],
    savedVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Video,
      },
    ],
    likedVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Like,
      },
    ],
    commemtVideos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment,
      },
    ],
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
