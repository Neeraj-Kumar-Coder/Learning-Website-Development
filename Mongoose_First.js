// Importing mongoose module
const mongoose = require("mongoose");

// Connecting
const database = "firstdb";
mongoose.connect(`mongodb://localhost/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log(`We are successfully connected to ${database} database`);
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

let Student = mongoose.model("Student", studentsSchema);

// Creating the instances
let student_1 = new Student({ roll_number: 1, name: "Neeraj Kumar", subject: "Computer Science" });

// Saving the instance to the Database Collection
student_1.save((err, student_instance) => {
    if (err) return console.error(err);
    student_instance.about();
});