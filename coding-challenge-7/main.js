// Please create a function that takes in an array of numbers and returns a
//       new array that only contains odd numbers.

let arrNums = [1, 2, 4, 5, 7, 4];

let newArr = [];
arrNums.forEach((num) => {
  if (num % 2 != 0) {
    newArr.push(num);
  }
});

console.log(newArr);
