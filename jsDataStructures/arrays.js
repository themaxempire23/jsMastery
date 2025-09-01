var students = ['Ali', 'Usman', 'John', 'Jacob', "Werner"];
console.log(students);


var employees = new Array('Demboze', 'Neves', 'Pedri', 'Aguero', "Balotelli");

var drivers = new Array('lecre', 'Isack', 'Piastri', 'Lando', "Max");
console.log(drivers)


var things = new Array('lecre', 78, false, 5.6, "Max");
console.log(things)


console.log(employees[3]);
employees[3] = "Verstaapen";
console.log(employees[3]);
console.log(employees);

drivers.pop([1]) //Pop, removes the last element in the array
console.log(drivers);

drivers.unshift("Code is fun!") // Adds an element in the beginning of the array
console.log(drivers)
drivers.shift(); // removing the first element from the array
console.log(drivers)