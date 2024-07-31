const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({}, { timestamps: true });

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
