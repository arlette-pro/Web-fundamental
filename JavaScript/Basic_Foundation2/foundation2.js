//1-Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}
var arr = [-1, 3, 5, -5];
var updatedArr = makeItBig(arr);
console.log(updatedArr); // Output: [-1, 'big', 'big', -5]

//2-Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  return max;
}
var arr = [1, 5, 10, -2];
var max = printLowReturnHigh(arr);
console.log(max); // Output: 10

//3-Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr) {
  var secondToLast = arr[arr.length - 2];
  var firstOdd = null;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      firstOdd = arr[i];
      break;
    }
  }
  console.log(secondToLast);
  return firstOdd;
}
var arr = [2, 4, 7, 8, 9];
var firstOdd = printOneReturnAnother(arr);
console.log(firstOdd); // Output: 7

//4-Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
var arr = [1, 2, 3];
var doubledArr = double(arr);
console.log(doubledArr); // Output: [2, 4, 6]

//5-Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}
var arr = [-1, 1, 1, 1];
var updatedArr = countPositives(arr);
console.log(updatedArr); // Output: [-1, 1, 1, 3]

//6-Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensAndOdds(arr) {
  var oddCount = 0;
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddCount = 0;
      evenCount++;
      if (evenCount === 3) {
        console.log("Even more so!");
        evenCount = 0;
      }
    } else {
      evenCount = 0;
      oddCount++;
      if (oddCount === 3) {
        console.log("That's odd!");
        oddCount = 0;
      }
    }
  }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evensAndOdds(arr); // Output: That's odd! Even more so! That's odd!

//7-Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementTheSeconds(arr) {
  for (var i = 1; i < arr.length; i += 2) {
    arr[i] += 1;
  }
  for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
  return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var updatedArr = incrementTheSeconds(arr);
console.log(updatedArr); // Output: [1, 3, 3, 5, 5, 7, 7, 9, 9]

//8-Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1].length;
  }
  return arr;
}
var arr = ["hello", "dojo", "awesome"];
var updatedArr = previousLengths(arr);
console.log(updatedArr); // Output: ["hello", 5, 4]

//9-Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  return newArr;
}
var arr = [1, 2, 3];
var newAddSevenArr = addSeven(arr);
console.log(newAddSevenArr); // Output: [8, 9, 10]

//10-Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values)
function reverseArray(arr) {
  var temp;
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
var arr = [3, 1, 6, 4, 2];
var reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: [2, 4, 6, 1, 3]

//11-Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (negative values should remain negative). Given [1,-3,5], return [-1,-3,-5].
function makeNegative(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var arr = [1, -3, 5];
var newNegativeArr = makeNegative(arr);
console.log(newNegativeArr); // Output: [-1, -3, -5]

//12-Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
  var foundFood = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      foundFood = true;
    }
  }
  if (!foundFood) {
    console.log("I'm hungry");
  }
}
var arr = ["apple", "banana", "food", "orange"];
alwaysHungry(arr); // Output: yummy

//13-Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
  var temp;
  for (var i = 0; i < Math.floor(arr.length / 2); i += 2) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}
var arr = [true, 42, "Ada", 2, "pizza"];
swapTowardCenter(arr);
console.log(arr); // Output: ["pizza", 42, "Ada", 2, true]

var arr2 = [1, 2, 3, 4, 5, 6];
swapTowardCenter(arr2);
console.log(arr2); // Output: [6, 2, 4, 3, 5, 1]

//14-Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}
function scaleArray(arr, num) {
  var newArr = arr.slice();
  for (var i = 0; i < newArr.length; i++) {
    newArr[i] *= num;
  }
  return newArr;
}
