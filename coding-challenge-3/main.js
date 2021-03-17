//Create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array.

function arraySum(listOfValues) {
  let result = listOfValues[0] + listOfValues[listOfValues.length - 1];
  console.log(result);
}

arraySum([1, 2, 3, 4]);
