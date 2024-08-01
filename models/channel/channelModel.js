const mongoose = require("mongoose");
const User = require("../user/userModel");

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    discription: {
      type: String,
      max: 1000,
    },
    craetedBy: [],
    subscribers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    videos: [],
    profilepic: {
      type: String,
    },
    bannerImg: {
      type: String,
    },
    socialLinks: [],
    createdAt: {
      type: timestamps,
    },
  },
  { timestamps: true }
);

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
