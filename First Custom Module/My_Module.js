console.log("This is my custom module");

function getAverage(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

function getMax(arr) {
    let maxEle = Number.NEGATIVE_INFINITY;
    arr.forEach(element => {
        maxEle = Math.max(maxEle, element);
    });
    return maxEle;
}

module.exports = {
    moduleName: "My_Module", // Name of the module
    DOF: "03-06-2022",       // Date of Formation
    getAverage: getAverage,  // Function to get the average of an array
    getMax: getMax           // Function to get the maximum element in an array
};