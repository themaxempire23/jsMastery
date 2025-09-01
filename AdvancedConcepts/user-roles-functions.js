function userRole(name, role){
    switch(role){
        case "Super Admin":
            console.log(`${name} is a ${role} and it has all access.`);
            break;

            case "Admin":
            console.log(`${name} is a ${role} and it has all access. But to add records only.`);
            break;

            case "Marko":
            console.log(`${name} is a ${role} and it has all access.`);
            break;

            default:
            console.log("Invalid user role. Can't access system at all!");
            break;
    }
}

userRole("Ali", "Super Admin");