//part1

//code1
function foo(x, y) {
  return 5;
}
console.log(foo(5, 5)); // output: 5

//code2
function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8)); // [2,2,5], [2,2,5], [6,8,5], [6,8,5]

//code3
function foo(x) {
  var z = [];
  z.push(x);
  z.pop();
  z.push(x);
  z.push(x);
  return z;
}
var y = foo(2);
y.push(5);
console.log(y); //output: [2,2,5]

//code4
function foo(x){
    if(x[0] <x [1]) {
       return true;
    }
    else {
       return false;
    }
 }
 var b = foo([2,3,4,5])
 console.log(b); //output  true
 
//code4
function foo(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding"
      }
  }
}
console.log(foo([1,2,3,4])) //output: doesn't return anything: undefined


//code 5
function foo(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding"
      }
      else if(x[i] < 0){
           x[i] = "Dojo"
      }
  }
}
console.log(foo([5,7,-1,4])) //output: undefined

//code6
function foo(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 var b = foo([5,10])
 console.log(b); //output: 10

 //code7
 function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
//output: nothing because the function hasn't been called

 
//part2

//code1-Analyses an array's value and return the average of each respective array
function printAverage(x){
    var sum = 0;
    for (var i=0; i<x.length; i++){
        sum += x[i];
    }
    var average = sum / x.length;
    return average;
 }
 var y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5


 //code2- Create an array with all the odd integers between 1 and 255
 function returnOddArray(){
    for (i=0; i <= 255; i +=2){
        Arr.push(i);
    }
    return arr;
 }
 
 var y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


 //code3- Square each value in a given array, returning that same array with changed values
 function squareValue(x){
    for (var i=0; i < x.length; i++){
        x.push(x[i] * x[i])
    }
    return x;
 }
 var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
 
 

 