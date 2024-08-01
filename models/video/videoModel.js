const mongoose = require("mongoose");
const Channel = require("../channel/channelModel");
const Video = require("../video/videoModel");
const Like = require("../like/likeModel");
const Comment = require("../comment/commentModel");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: 5,
      max: 100,
    },
    discription: {
      type: String,
      min: 5,
      max: 500,
    },
    url: {
      type: string,
    },
    thumbnail: {
      type: string,
    },
    uploadedBy: [
        {
            type:mongoose.Schema.type.ObjectId,
            ref:User
        }
    ],
    view: [{
        type:mongoose.Schema.type.ObjectId,
        ref:User
    }],
    like: [{
        type:mongoose.Schema.type.ObjectId,
        ref:Like
    }],
    dislike: [{
        type:mongoose.Schema.type.ObjectId,
        ref:Video
    }],
    comment: [{
        type:mongoose.Schema.type.ObjectId,
        ref:Comment
    }],
    category: {
      type:String
    },
    hashtag: [{
        type:mongoose.Schema.type.ObjectId,
        ref:hashtag
    }],
    mention: [{
        type:mongoose.Schema.type.ObjectId,
        ref:mention
    }],
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
