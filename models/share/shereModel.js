const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");

const shereSchema = new mongoose.Schema(
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
    /// thinking ??????? plan complete then change this code
    sharedAt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
  },
  { timestamps: true }
);

const Shere = mongoose.model("Shere", shereSchema);

module.exports = Shere;
