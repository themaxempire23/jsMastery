class Employee {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    salary = "";
    jobDescription = [];

    getEmployeeInfo(){
        return {name: this.name, email: this.email}
    }

    setJoDescription(description){
        this.jobDescription.push(description);
    }

    getJobDescriptions(){
        return this.jobDescription;
    }
}

    module.exports = Employee;
