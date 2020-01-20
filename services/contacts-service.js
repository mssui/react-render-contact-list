const contacts = require("../models/contacts-model");

async function findAll() {
  return contacts.find();
}

async function add(contact) {
  return contacts.create(contact);
}


module.exports = {
  findAll,
  add
};
