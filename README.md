# YouTube Backend

Welcome to the **YouTube Backend** project! This repository contains the backend code for a YouTube-like application. Below is an overview of the folder structure and its contents.

## Folder Structure

- `models/`: Contains the Mongoose models for various entities in the application.
  - `channel/`: Models related to channels.
    - `channelModel.js`: Defines the schema and model for channels.
  - `comment/`: Models related to comments and replies.
    - `commentModel.js`: Defines the schema and model for comments.
    - `recommentModel.js`: Defines the schema and model for replies to comments.
  - `hashtag/`: Models related to hashtags.
    - `hashtagModel.js`: Defines the schema and model for hashtags.
  - `history/`: Models related to user history.
    - `historyModel.js`: Defines the schema and model for user history.
    - `savedModel.js`: Defines the schema and model for saved items.
  - `like/`: Models related to likes and dislikes.
    - `likeModel.js`: Defines the schema and model for likes.
    - `dislikeModel.js`: Defines the schema and model for dislikes.
  - `mention/`: Models related to mentions.
    - `mentionModel.js`: Defines the schema and model for mentions.
  - `notification/`: Models related to notifications.
    - `notificationModel.js`: Defines the schema and model for notifications.
  - `playlist/`: Models related to playlists.
    - `playlistModel.js`: Defines the schema and model for playlists.
  - `shere/`: Models related to shares.
    - `shereModel.js`: Defines the schema and model for shares.
  - `subscribe/`: Models related to subscriptions.
    - `subscribeModel.js`: Defines the schema and model for subscriptions.
  - `user/`: Models related to users.
    - `userModel.js`: Defines the schema and model for users.
  - `video/`: Models related to videos.
    - `videoModel.js`: Defines the schema and model for videos.

- `routes/`: Contains the route handlers for the application.
  - `index.js`: Entry point for defining and exporting all routes.

- `package.json`: Contains project metadata and dependencies.

- `.env`: Contains environment variables required for the application.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Dampipal/youtube_backend.git
2. **Install Node Pkg**
   ```bash
   npm i
1. **Run**
   ```bash
   npm start
## Models Complete Code

The `models/channel/channelModel.js` file contains code. Here is:

```javascript
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

## Models Complete Code
The `models/comment/commentModel.js` file contains code. Here is:

```javascript
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

## Models Complete Code
The `models/channel/recommentModel.js` file contains code. Here is:

```javascript
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

The `models/hashtag/hashtagModel.js` file contains code. Here is:

```javascript
const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
  tags: [
    {
      types: String,
    },
  ],
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
module.exports = Hashtag;

The `models/history/historyModel.js` file contains code. Here is:

```javascript
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

The `models/history/savedModel.js` file contains code. Here is:

```javascript
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

The `models/like/likeModel.js` file contains code. Here is:

```javascript
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

The `models/like/dislikeModel.js` file contains code. Here is:

```javascript
const mongoose = require("mongoose");
const User = require("../user/userModel");
const Video = require("../video/videoModel");

const dislikeSchema = new mongoose.Schema({
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
  dislikedAt: {
    type: timestamps,
  },
});

const Dislike = mongoose.model("Dislike", dislikeSchema);
module.exports = Dislike;

The `models/mention/mentionModel.js` file contains code. Here is:

```javascript
const mongoose = require("mongoose");
const User = require("../user/userModel");

const mentionSchema = new mongoose.Schema({
  mentioned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
  mentionedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
});

const Mention = mongoose.model("Mention", mentionSchema);
module.exports = Mention;


The `models/notification/notificationModel.js` file contains code. Here is:

```javascript
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({}, { timestamps: true });

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;


The `models/playlist/playlistModel.js` file contains code. Here is:

```javascript
const mongoose = require("mongoose");
const Video = require("../video/videoModel");
const User = require("../user/userModel");

const playlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Video,
      },
    ],
    createdBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;


The `models/shere/shereModel.js` file contains code. Here is:

```javascript
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


The `models/subscribe/subscribeModel.js` file contains code. Here is:

```javascript
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


The `models/user/userModel.js` file contains code. Here is:

```javascript
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


The `models/video/videoModel.js` file contains code. Here is:

```javascript
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



## Server Complete Code

The `index.js` file contains code. Here is:

```javascript
const express = require('express');

const app = express();

// Port 
const PORT = 3000

// routes 

app.get('/',(req,res) =>{
    res.send("WELCOME TO YOUTUBE BACKEND SERVER");
})

app.get('/list',(req,res) => {
    res.send("All list is coming .....")
})
app.get('/*',(req,res) =>{
    res.send('This Route not avilable')
})

app.listen(PORT,()=>{
    console.log(`Server run on Port ${PORT}`)
})



