const nunjucks = require("nunjucks");
nunjucks.configure("./app/view", {autoescape: false});

const userModel = require("../model/userModel");

module.exports = {
	login: (request, reply) => {
		if (request.yar.get("userid") != null) {
			reply.redirect("activity/list");
		}
		else if (request.payload == null || request.payload.userid == undefined || request.payload.password == undefined) {
			reply(nunjucks.render("login.html"));
		}
		else {
			var userid = request.payload.userid;
			var password = request.payload.password;
			
			userModel.User.findOne({userid: userid, password: password}, (err, user) => {
				if (err) {
					throw err;
				}
				if (user) {
					request.yar.set("userid", user.userid);
					reply.redirect("activity/list");
				}
				else {
					reply(nunjucks.render("login.html", {errorMessage: "No such account."}));
				}
			});
		}
	},
	logout: (request, reply) => {
		request.yar.reset();
		reply.redirect("login");
	}
}