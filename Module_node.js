const fs = require("fs");

const text = fs.readFileSync("./Sample_File.txt", "utf-8");
const newText = "This is a new text whcih is written using JavaScript!";

fs.writeFileSync("Sample_File.txt", newText);
console.log(text);

fs.readFile("Sample_File.txt", "utf-8", (err, data) => {
    console.log("The error is:", err);
    console.log("The data is:", data);
});

console.log("Reading the file completed");