// How to code a for loop in js


//---> for loo skeleto <---//
// for(initialization; Condition; increment/decrement; ){
//     this is a loop body
// }


for(var i = 1; i <= 10; i++){
    if(i % 2 == 0){
    console.log(i);
    }
}




// Example 2

for(var i = 1; i <= 10; i++){
    // if(i % 2 == 0){
    // console.log(i);
    // }
    if (i == 5){
        continue;
    }
    console.log(i)
}


// Example 3:

// Example 2

for(var i = 1; i <= 10; i++){
    // if(i % 2 == 0){
    // console.log(i);
    // }
    if (i == 5){
        break;
    }
    console.log(i)
}



//Example 3 using loops with Arrays

var teams = ['Chelsea', 'Man.U', 'Arsenal', 'City', 'Spurs', 'Villa'];

// Example 2

for(var i = 0; i <= teams.length; i++){
    console.log(teams[i]);
}


//4th example:


for(var i = 0; i < teams.length; i++){
    console.log(teams[i]);
}