const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const cors = require("cors");


mongoose.Promise = global.Promise;
const port = process.env.PORT || 3030;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contact-list');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("*", cors());
app.use('/', require('./routes/api'));


// Handle production and SPA
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log('Server is running on:', port);
})

