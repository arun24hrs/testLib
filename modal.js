const mongoose = require("mongoose");

const users = mongoose.Schema({
    uid: String,
    gid: String,
    username: String,
    homedir: String
  })

const Modal = mongoose.model("user", users);

module.exports = Modal;