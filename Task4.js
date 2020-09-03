// Task 4
// Create a password validator function that takes in the password as its argument and
// returns an integer value you can evaluate to determine the password strength. Using the
// following validators:

const passwordValidation = (input) => { 
// password with only numbers
if(input.match(/^[A-Za-z]+$/)){
return ' very weak';
}
//password containing only numbers
else if(input.match(/^[0-9]+$/) ){
 return 'weak'
  }
  //password containing strings and numbers
else if(input.match(/^[0-9a-zA-Z]+$/) ){
 return 'strong'
  }
  //a password containing strings, numbers and special characters
else if(input.match(/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/) ){
return 'very strong'
}

}

console.log(allLetter('777'))