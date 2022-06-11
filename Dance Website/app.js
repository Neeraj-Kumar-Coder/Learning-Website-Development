// Required packages
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { stringify } = require("querystring");


// Express settings
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));
app.use(express.urlencoded()); // Middleware to parse submitted form data


/* DataBase Settings */

// Connecting to the database
const database = "rockandrollformdata";
mongoose.connect(`mongodb://localhost/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log(`We are successfully connected to "${database}" database`);
});


// Creating the Schema
const memberSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    email: String,
    address: String,
    concern: String
});

memberSchema.methods.about = function () {
    console.log(`Name: ${this.name}\nGender: ${this.gender}\nAge: ${this.age}\nEmail: ${this.email}\nAddress: ${this.address}\nConcer: ${this.concern}\n`);
}


// Modelling the Schema
let Member = mongoose.model("member", memberSchema);


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
});

app.post("/contact", (req, res) => {
    const params = {};
    console.log(`Endpoint hitted = ${req.url} (POST REQUEST)`);
    let member = new Member(req.body);
    member.save((err, obj) => {
        if (err) return console.error(err);
        obj.about();
    });
    res.status(200).render("contact.pug", params);
});


// Server
const port = 80;

app.listen(port, () => {
    console.log(`Server is running at port ${port}\nhttp://localhost:${port}/`);
});