// Importing mongoose module
const mongoose = require("mongoose");


// Connecting
const database = "firstdb";
mongoose.connect(`mongodb://localhost/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log(`We are successfully connected to "${database}" database`);
});


// Creating the schema
const studentsSchema = new mongoose.Schema({
    roll_number: Number,
    name: String,
    subject: String
});

studentsSchema.methods.about = function () {
    console.log(`Roll Number: ${this.roll_number}\nName: ${this.name}\nSubject: ${this.subject}\n`);
}


// Modelling the Schema
let Student = mongoose.model("Student", studentsSchema);


// Creating the instances
let student_1 = new Student({ roll_number: 1, name: "Neeraj Kumar", subject: "Computer Science" });
let student_2 = new Student({ roll_number: 2, name: "Rinki Rani", subject: "Computer Science" });
saveInstance(student_1);
saveInstance(student_2);


// Function to save the instance to the Database
function saveInstance(student) {
    student.save((err, student_instance) => {
        if (err) return console.error(err);
        student_instance.about();
    });
}