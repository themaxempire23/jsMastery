const Employee = require('./class.js');
var emp1 = new Employee("Max", "example@23.com");
console.log(emp1.getEmployeeInfo());
emp1.setJoDescription("Send Emails");
console.log(emp1.setJoDescription());