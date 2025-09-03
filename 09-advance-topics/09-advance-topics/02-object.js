const Employee  = require("./01-class");


 var emp1 = new Employee("Ali", "ali@demo.com");
console.log("Employee Info: ", emp1.getEmployeeInfo());
emp1.setJobDescription("Send Emails");
console.log("Job Descriptions :", emp1.getJobDescriptions());