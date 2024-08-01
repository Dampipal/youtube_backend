const mongoose = require("mongoose");
const Channel = require("../channel/channelModel");

const subscribeSchema = new mongoose.Schema(
  {
    Subscriber: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    channel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Channel,
      },
    ],
    SubscribedAt: {
      type: timestamps,
    },
  },
  { timestamps: true }
);

const Subscribe = mongoose.model("Subscribe", subscribeSchema);
module.exports = Subscribe;
