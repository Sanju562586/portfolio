const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email:    { type: String, required: true },
  message:  { type: String, required: true },
  status:   { type: String, default: 'pending' },
  date:     { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
