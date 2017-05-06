const Hapi = require("hapi");
const routes = require("./app/routes");
const database = require("./database");

var server = new Hapi.Server();
server.connection({port: 3000});

var options = {
	storeBlank: false,
	cookieOptions: {
		password: "this-is-a-temporary-password-and-must-be-replaced-and-not-hardcoded",
		isSecure: false
	}
};

server.register({
	register: require("yar"),
	options: options
}, (err) => {
	server.route(routes);
	server.start((err) => {
		if (err) {
			throw err;
		}
		console.log(`Server running at ${server.info.uri}.`);
	});
});


