const mongoose = require("mongoose");

var activitySchema = new mongoose.Schema({
	body: {type: String, required: true}
});

var activity = mongoose.model("activity", activitySchema);

module.exports = {
	Activity: activity
};