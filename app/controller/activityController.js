const nunjucks = require("nunjucks");
nunjucks.configure("./app/view", {autoescape: false});

const activityModel = require("../model/activityModel");

module.exports = {
	post: (request, reply) => {
		if (request.payload == null || request.payload.content == undefined) {
			reply(nunjucks.render("post.html"));
		}
		else {
			var body = request.payload.content;
			var activity = new activityModel.Activity({body: body});
			activity.save();
			reply.redirect("list");
		}
	},
	list: (request, reply) => {
		var activities = activityModel.Activity.find((err, activities) => {
			if (err) {
				throw err;
			}
			reply(nunjucks.render("list.html", {activities: activities}));
		});
	},
	remove: (request, reply) => {
		if (request.payload == null || request.payload.id == undefined) {
			reply.redirect("list");
		}
		else {
			activityModel.Activity.remove({_id: request.payload.id}, (err) => {
				if (err) {
					throw err;
				}
				reply.redirect("list");
			});
		}
	}
}