const activityController = require("./controller/activityController");
const loginController = require("./controller/loginController");

module.exports = [{
		method: ["GET", "POST"],
		path: "/activity/post",
		handler: activityController.post,
		config: {
			description: "Post Activity"
		}
	}, {
		method: ["GET"],
		path: "/activity/list",
		handler: activityController.list,
		config: {
			description: "List Activities"
		}
	}, {
		method: ["POST"],
		path: "/activity/delete",
		handler: activityController.remove,
		config: {
			description: "URL for deleting activities"
		}
	}, {
		method: ["POST", "GET"],
		path: "/login",
		handler: loginController.login,
		config: {
			description: "URL for logging in"
		}
	}, {
		method: "GET",
		path: "/logout",
		handler: loginController.logout,
		config: {
			description: "URL for logging out"
		}
	}
];