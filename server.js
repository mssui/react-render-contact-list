const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");


mongoose.Promise = global.Promise;
const port = process.env.PORT || 3030;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contact-list');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', require('./routes/api'));


// Handle production and SPA
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'));
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => {
	console.log('Server is running on:', port);
})

