//Challenge 2: Multiply each value in the array by its array position

var testArr = [6,3,5,1,2,4];
for(i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
    console.log(testArr);
}