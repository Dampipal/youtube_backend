const mongoose = require("mongoose");
const User = require("../user/userModel");
const Like = require("../like/likeModel");
const Dislike = require("../like/dislikeModel");

const recommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    postedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment,
      },
    ],
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Like,
      },
    ],
    dislike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Dislike,
      },
    ],
    postedAT: {
      type: timestamps,
    },
  },
  { timestamps: true }
);

const Recomment = mongoose.model("Recomment", recommentSchema);
module.exports = Recomment;
