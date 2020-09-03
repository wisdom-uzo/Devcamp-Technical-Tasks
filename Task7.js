
 //Task 7
 //Write a function that takes an array of positive integers and calculates the standard
//deviation of the numbers. The function should return the standard deviation.

function getStandardDeviation (integers) {
    const n = integers.length
    const mean = integers.reduce((a, b) => a + b) / n
    return Math.sqrt(integers.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  } 
  
  console.log(getStandardDeviation([81,93,98,89,89]))
  
  