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
