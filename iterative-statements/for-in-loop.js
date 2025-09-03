var users ={
    firstName: "Khabib",
    lastName: "Khalid",
    skill: "Full Stack Web Development",
    isActive: true,
    age: 30,
}

for(var property in users){
    console.log(`${ property} ${users[property]}`);
}