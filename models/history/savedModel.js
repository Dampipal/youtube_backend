const mongoose = require("mongoose");
const Video = require("../video/videoModel");
const User = require("../user/userModel");

const savedSchema = new mongoose.Schema(
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
    savedAt: {
      type: timestamps,
    },
  },
  { timestamp: true }
);

const Saved = mongoose.model("Saved", savedSchema);
module.exports = Saved;
