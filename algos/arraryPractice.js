//Hacker Hero - 16-25 Basic Learn to Code

// Given an array of multiple values, write a function that returns the sum of its numbers.
// For example, findSum([1,2,3]) should return 6.

let findSum = (arr) => {
  let sum = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum;
};

// console.log(findSum([1,2,3]))

// Given an array with multiple values, write a function that returns the maximum number in the array.
// For example, findMax([-3,3,5,7]) should return 7.

let findMax = (arr) => {
  let maxNum = arr[0];
  arr.map((x) => {
    if (x > maxNum) {
      maxNum = x;
    }
  });

  return maxNum;
};

// console.log(findMax([-1,-3,-5,-7]))

// Given an array with multiple values, write a function that returns the minimum value in the array.
// For example findMin([0,3,-5]) should return -5.

let findMin = (arr) => {
  let minNum = arr[0];

  arr.map((x) => {
    if (x < minNum) {
      minNum = x;
    }
  });
  return minNum;
};

// console.log(findMin([0,3,-5]))

// Given an array with multiple values, write a function that returns a new array with two elements.
// The first value in the new array should be the minimum value in the original array.
// The second value in the new array should be the maximum value in the original array.
// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].

let findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  arr.map((x) => {
    if (x < min) {
      min = x;
    }
    if (x > max) {
      max = x;
    }
  });

  return [min, max];
};

// console.log(findMinMax([1,3,5]))

// Given array of numbers, create function to replace last value with number of positive values.
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

let countPositives = (arr) => {
  let count = 0;

  arr.map((x) => {
    if (x > 0) {
      count++;
    }
  });
  arr[arr.length - 1] = count;
  return arr;
};

// console.log(countPositives([-1,1,1,1]))

// Given an array, write a function that prints values that are greater than its 2nd value in the array.
// For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13.
// Assume that the array has at least 2 values. Have the function also return the sum of the numbers that were printed/logged.

let valGreaterThanSecond = (arr) => {
  let sec = arr[1];
  let sum = 0;

  arr.map((x) => {
    if (x > sec) {
      console.log(x);
      sum += x;
    }
  });
  return sum;
};

// console.log(valGreaterThanSecond([1,3,5,7,9,13]))

// Given two numbers passed to the function, return a new array of length num1 with each value num2.\
// For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

let thisLengthThatValue = (num1, num2) => {
  let arr = [];

  for (let i = 0; i < num1; i++) {
    arr.push(num2);
  }
  return arr;
};

// console.log(thisLengthThatValue(3,5))

// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

let addSevenToMost = (arr) => {
  let newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }

  return newArr;
};

// console.log(addSevenToMost([1,3,5]))

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
// If the array that was passed to the function has less than two elements, have the function return false.
// For example, greaterThanSecond([1,3,5,7]) should return [5, 7].
// Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.

let greaterThanSecond = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  let newArr = [];

  arr.map((x) => {
    if (x > arr[1]) {
      newArr.push(x);
    }
  });

  return newArr;
};

// console.log(greaterThanSecond([0, -3, 2, 5]))

// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2.
// For example, swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].

let swapFirstLast = (arr) => {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
};

// console.log(swapFirstLast([1, 3, 5]));

let factorial = (num) => {
  // Enter code below
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
};

// console.log(factorial(3))

let swapTowardsCenter = (arr) => {
    let newArr = [];

for(let i = arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
}

return newArr;
}

console.log(swapTowardsCenter([true,42,"Ada",2,"pizza"]))