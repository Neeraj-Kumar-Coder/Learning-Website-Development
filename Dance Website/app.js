// Required packages
const express = require("express");
const path = require("path");


// Express settings
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));


// Endpoints
app.get("/", (req, res) => {
    const params = {};
    console.log(`Endpoint hitted = ${req.url}`);
    res.status(200).render("home.pug", params);
});

app.get("/contact", (req, res) => {
    const params = {};
    console.log(`Endpoint hitted = ${req.url}`);
    res.status(200).render("contact.pug", params);
})


// Server
const port = 80;

app.listen(port, () => {
    console.log(`Server is running at port ${port}\nhttp://localhost:${port}/`);
});