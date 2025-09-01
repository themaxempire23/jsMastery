var user = {
    firstName: "Khabib",
    lastName: "Khalid",
    skill: "Full Stack Web Development",
    isActive: true,
    age: 30,
    //Getting user info
    getUserInfo: function(role){
        return `${this.firstName} have full user access, and your role is ${role}`;
    }
}

console.log(user.getUserInfo("Super Admin"));

