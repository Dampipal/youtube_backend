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
