const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create contacts Schema

const ContactsSchema = new Schema({
  type: mongoose.Schema.Types.ObjectId,
  name: String,
  userName: String,
  email: String,
  phone: String,
  website: String,
});

module.exports = mongoose.model("contacts", ContactsSchema);
