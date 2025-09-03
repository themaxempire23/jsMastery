class Employee {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    salary = "";
    #jobDescription = [];

    //Getter method
    getEmployeeInfo(){
        return {name: this.name, email: this.email}
    }

    //# Setter method
    setJobDescription(description){
        this.#jobDescription.push(description); // private method used a #
    }

    //Getter method
    getJobDescriptions(){
        return this.#jobDescription;
    }
}

module.exports = Employee;

var ali = new Employee("ali", "ali@demo.com");
console.log(ali.getEmployeeInfo());
ali.setJobDescription("Send emails in the morning");
console.log(ali.getJobDescriptions());
console.log(ali.jobDescription);