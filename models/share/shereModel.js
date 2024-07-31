const mongoose = require("mongoose");

const shereSchema = new mongoose.Schema({}, { timestamps: true });

const Shere = mongoose.model("Shere", shereSchema);

module.exports = Shere;
