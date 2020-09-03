// Task 3
//Write a function that accepts an array of positive integers and returns an array of all
//prime numbers from the given array. A prime number is a number that is only divisible by
//1 and itself.

const valuesOfArry = (e) => {
    //filter prime numbers
    const values =  e.filter((value => value % 2 === 0 ))
    return values
           } 
  console.log(valuesOfArry([2,3,4,5, 10]))
  