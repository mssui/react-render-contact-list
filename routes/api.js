const express = require("express");
const router = express.Router();
const Contacts = require("../services/contacts-service");

// GET REQUESTS
router.get("/contacts", async (req, res, next) => {
    var contactsData = await Contacts.findAll();

    let contacts = [];
    for (var i = 0; i < contactsData.length; i++) {
        contacts.push({
            name: contactsData[i].name,
            userName: contactsData[i].userName,
            email: contactsData[i].email,
            website: contactsData[i].website,
        });
    }
    res.send(contacts);
});
//POST REQUESTS
router.post("/addcontact", async (req, res, next) => {
    console.log(req.body)
    const newpost = await Contacts.add(req.body);
    console.log(req.body)
    res.send(newpost);
});


module.exports = router;
