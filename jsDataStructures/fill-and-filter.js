// var myMoney = [100, 34, 77, 588, 7, 8,7];
// console.log(myMoney)


//Filling
var myMoney = [100, 34, 77, 588, 7, 8,7];
//console.log(myMoney.fill("NaN", 3, 7));

//Filter
// accessing values of a cersting size

function checkAge(age){
    return age >= 18;
}

console.log(myMoney.filter(checkAge))