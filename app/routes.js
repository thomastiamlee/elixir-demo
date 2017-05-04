const activityController = require("./controller/activityController");

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
	}
];