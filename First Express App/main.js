const express = require("express");
const path = require("path");
const app = express();

const port = 80;

// Serving static files
app.use("/staticfiles", express.static("./staticfiles"));

// Setting the view engine
app.set("view engine", "pug");

// Setting views directory
app.set("./views", path.join(__dirname, "views"));

app.get("/demo", (req, res) => {
    res.status(200).render("demo", { title: "This is title", message: "This is a sample message" });
});

app.get("/", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.send("This is HOME PAGE of our first express app!");
});

app.get("/services", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.send("This is SERVICES PAGE of our first express app!");
});

app.get("/about", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.send("This is ABOUT PAGE of our first express app!");
});

app.get("/contact", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.send("This is CONTACT PAGE of our first express app!");
});

app.post("/hidden", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.send("This is a hidden page which can be accessed only using post request!");
});

app.get("/super", (req, res) => {
    console.log(`The url requested is ${req.url}`);
    res.status(404).send(`404 This page is not found`);
});

app.listen(port, () => {
    console.log(`The express app has started on port ${port}`);
});