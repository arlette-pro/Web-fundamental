//part1

//code 1
function multiply(x, y) {
  console.log(x);
  console.log(y);
}
var b = multiply(2, 3);
console.log(b); //output: 2, 3, 6

//code 2
function multiply(x, y) {
  return x * y;
}
var b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2)); //output: 6, 10

//code 3
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
  i = i + 3;
  console.log(i); //output: 3, 4, 5
}


// code 4
var x = 15;
console.log(x);
function foo() {
  var x = 10;
  console.log(x);
}
console.log(x);
foo();
console.log(x);
// output: 15, 15, 10, 10

// code 5
for (var i = 0; i < 15; i += 2) {
  console.log(i); //output:  0,,2,4,6,8, 10,14
}

//code 6
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i * j); // output: 0, 0, 0, 1, 0, 2
  }
}

//code 6
function foo(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
      console.log(i * j);
    }
  }
}
var z = foo(3, 3);
console.log(z); // output: 0, 0, 0, 0, 1, 2, 0, 2, 4

//code 7
function foo(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
  return x * y;
}
var z = foo(3, 5);
console.log(z); // output: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

// part 2

//code1 - Print 1 to x
function printUpTo(x) {
  if (x < 0) {
    console.log("negative number");
    return false;
  }
  for (var i = 1; i <= x; i++) {
    console.log(i);
  }
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
var y = printUpTo(-10); // should return false
console.log(y); // should print false

code2- PrintSum
function printSum(x){
    var sum = 0;
    for (var i=0; i<= x ;i++){
        sum +=i;
        console.log(i, sum);
    }
    return sum
  }
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640
  
//code3- PrintSumArray
function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6
  

  //function that returns the largest element in a given array
  function largestElement(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  console.log(largestElement([1, 30, 5, 7])); // should log 30