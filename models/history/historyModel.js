const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");

const historySchema = new mongoose.Schema(
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
    watchedAt: {
      type: timestamps,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);
module.exports = History;
