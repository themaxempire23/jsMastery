var obtainedMarks = 95;
var totalMarks = 100;

// formula for calculating the marks
var marksPercentage = obtainedMarks / totalMarks * 100;
//rounding off the percentage
var roundPercentage = Math.round(marksPercentage);


console.log("your mark percentage is: " + marksPercentage + "%"); //cancatination
console.log("your mark percentage rounded off is: " +roundPercentage + "%");

// Precedence

console.log(typeof marksPercentage);