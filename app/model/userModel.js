const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	userid: {type: String, required: true},
	password: {type: String, required: true}
});

var user = mongoose.model("user", userSchema);

module.exports = {
	User: user
};