// assignment 1
for (var i = 0; i < 5; i++) {
  console.log(i); //  output: 0,1, 2, 3, 4
}

// assignment 2
for (var i = 0; i < 5; i++) {
  i = i + 1;
  console.log(i); //ouput: 1, 3, 5
}

// assignment 3
for (var i = 0; i < 5; i++) {
  i = i + 3;
  console.log(i); // output 3, 7
}

// assignment 4
function y(num1, num2) {
  return num1 + num2;
}
console.log(y(2, 3));
console.log(y(3, 5)); //output 5, 8


// assignment5
function y(num1, num2) {
  console.log(num1);
  return num1 + num2;
}
console.log(y(2, 3));
console.log(y(3, 5));//output 2, 5, 3, 8


// assignment6
a = 15;
console.log(a);
function y(a) {
  console.log(a);
  return a;
}
b = y(10);
console.log(b); //output: 15, 10, 10

// assignment7
a = 15;
console.log(a);
function y(a) {
  console.log(a);
  return a * 2;
}
b = y(10);
console.log(b); //output 15, 10, 20
