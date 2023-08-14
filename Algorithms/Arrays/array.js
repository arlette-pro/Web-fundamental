//code1-Given an array and a value Y, count and print the number of array values greater thaY
function countValuesGreaterThanY(arr, Y){
    var x = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] > Y){
            x++;
        }
    }
    console.log(x)
}
countValuesGreaterThanY([1,2,3,4], 2);// expected output 2

// code2- Given an array, print the max, min and average values for that array
function printMaxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Avg: " + avg);
  }
  
  printMaxMinAvg([1, 2, 3, 4, 5]); // output: Max: 5, Min: 1, Avg: 3

  //code3 - Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

  function replaceNegatives(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        newArr.push("Dojo");
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(replaceNegatives([1, 2, -3, -5, 5])); // output [1, 2, "Dojo", "Dojo", 5]

  
  //code4-Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70]
   
  function removeVals(arr, start, end) {
    var x = end - start + 1;
    for (var i = start; i <= end; i++) {
      arr[i] = undefined;
    }
    for (var j = end + 1; j < arr.length; j++) {
      arr[j - x] = arr[j];
    }
    arr.length = arr.length - x;
    return arr;
  }
  
  console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4)); //output: [20, 30, 70]