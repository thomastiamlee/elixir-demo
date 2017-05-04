var Mongoose = require("mongoose"),
config = require("./config");
Mongoose.connect("mongodb://" + config.database.host + "/" + config.database.db);
var db = Mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error"));
db.once("open", () => {
    console.log("Connection with database succeeded.");
});