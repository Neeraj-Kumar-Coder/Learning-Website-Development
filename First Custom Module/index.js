console.log("This script is index.js");

const mymod = require("./My_Module");

console.log(mymod.moduleName);
console.log(mymod.DOF);
console.log(mymod.getMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(mymod.getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));