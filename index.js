const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

var heroes = [
	{ id: 11, name: "Dr Nice", rating: 5 },
	{ id: 12, name: "Narco", rating: 4 },
	{ id: 13, name: "Bombasto", rating: 4.4 },
	{ id: 14, name: "Celeritas", rating: 4.1 },
	{ id: 15, name: "Magneta", rating: 5 },
	{ id: 16, name: "RubberMan", rating: 2.5 },
	{ id: 17, name: "Dynama", rating: 4 },
	{ id: 18, name: "Dr IQ", rating: 4.2 },
	{ id: 19, name: "Magma", rating: 3.5 },
	{ id: 20, name: "Tornado", rating: 5 },
];
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/heroes/all", (req, res) => {
	//todo database code to fetch from db
	setTimeout(() => {
		res.send(heroes);
	}, 3000);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
