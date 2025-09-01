var loggedInWithEmail = false;
var loggedWithIG = false;
var loggedInWithGoogle = true;
var loggedWithApple = false;

if(loggedInWithEmail || loggedWithIG || loggedInWithGoogle || loggedWithApple){
    console.log("You have successfully loggedin!")
}
else {
    console.log("You do not meet the requirements, please try again.")
}