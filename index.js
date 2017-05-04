const Hapi = require("hapi");
const routes = require("./app/routes");
const database = require("./database");

var server = new Hapi.Server();
server.connection({port: 3000, host: "localhost"});
server.route(routes);

server.start((err) => {
	if (err) {
		throw err;
	}
	console.log(`Server running at ${server.info.uri}.`);
});

