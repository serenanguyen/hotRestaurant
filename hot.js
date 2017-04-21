//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express App
var app = express();
var PORT = 3000;

//data parsing stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//DATA
var tables = [{
	name: "Yoda",
	phoneNumber: 4091234567,
	email: "yoda@gmail.com",
	id:1
},{
	name: "Darth Vader",
	phoneNumber: 4094201337,
	email: "DV1337@hotmail.com",
	id:2
}];

var waitList = [{
	name: "Akbar",
	phoneNumber: 4090987654,
	email: "itsatrap@aol.com",
	id:3
},{
	name: "Han Solo",
	phoneNumber: 4092002000,
	email: "HanSolo@hotmail.com",
	id:4
}]

//Routes

app.get("/",function(req, res){
	res.sendFile(path.join(__dirname, "home.html"))
});
app.get("/api/tables",function(req, res){
	return res.json(tables);
});
app.get("/api/waitlist",function(req, res){
	return res.json(waitList);
});
app.get("/reservations",function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"))
});
app.get("/tables",function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"))
});


//stars server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});