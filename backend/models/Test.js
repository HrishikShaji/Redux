const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { strict: false }
);

const Test = mongoose.model("Test", testSchema);

module.exports = { Test };
