//Task number 1
const sumOfArryNumbers = (values) => {
  // filter the even numbers
  const filterEvenNumber =  values.filter((value => value % 2 === 0 ))
  // sum of even numbers
  const SumOfEvenNumbers =filterEvenNumber.reduce((a,b)=> a+b,0)
  //filter the odd numbers
  const filterOdeNumber =  values.filter((value => value % 2 === 1 ))
  //sum of odd numbers
  const sumOfOddNumbers =  filterOdeNumber.reduce((a,b)=> a+b,0)

    //return an array containing the sums. The first index returned hold the sum of the even integers 
  //and the second index the sum of the odd integers.
  return [SumOfEvenNumbers, sumOfOddNumbers]
} 

console.log(sumOfArryNumbers([2,3,4,5, 10,5]))