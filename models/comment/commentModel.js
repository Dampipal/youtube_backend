const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");
const Like = require("../like/likeModel");
const Dislike = require("../like/dislikeModel");

const commentSchema = new mongoose.Schema(
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
    video: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Video,
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
    postedAt: {
      type: timestamp,
    },
  },
  { timestamp: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
