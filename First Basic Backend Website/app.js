// Modules included
const express = require("express");
const path = require("path");
const fs = require("fs");

// constants
const app = express();
const port = 80;

// Express Settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));
app.use(express.urlencoded()); // Middleware to parse submitted form data

// Endpoints
const params = { "title": "Extreme Gym", "message": "Welcome to the Extreme Gym", "promotion": "Get our premium subscription only at $50" };
app.get("/", (req, res) => {
    console.log(`Endpoint hitted = ${req.url}`);
    res.status(200).render("template1.pug", params);
});

app.post("/", (req, res) => {
    console.log(`Endpoint hitted = ${req.url} (POST request)`);
    fs.appendFile("Form data.txt", JSON.stringify(req.body) + "\n", () => {
        console.log("Data had been saved successfully");
    });
    res.status(200).render("template1.pug", params);
});

// Server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});