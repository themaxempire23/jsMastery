var isLoggedIn = true;
var userEmailVerified = true;
var validCardInfo = true;

// if(isLoggedIn){
//     console.log("You have successfully logged In!");
//     if(userEmailVerified){
//         console.log("Your email is verified!")
//         if(validCardInfo){
//             console.log("Go ahead and make a purchase");
//         }
//     }
// }

if(isLoggedIn || userEmailVerified || validCardInfo || validCardInfo){
    console.log("You meeet all requirements and you can make a purchase!");
}
else{
    console.log("You don't meet the ocnditions, to make a purchase!")
}