const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({}, { timestamp: true });

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
