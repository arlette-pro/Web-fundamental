//code1- Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(resetNegatives([1, 2, -1, -3])); // output [1, 2, 0, 0]



//code2-Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}
console.log(moveForward([1, 2, 3])); // output [2, 3, 0]



//code 3- Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log(returnReversed([1, 2, 3])); // output [3, 2, 1]



//code4-Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(repeatTwice([4, "Ulysses", 42, false])); // output [4, 4, "Ulysses", "Ulysses", 42, 42, false, false]
