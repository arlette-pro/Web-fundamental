//code 1
function a() {
  return 35;
}
console.log(a()); // output 35

//code 2
function a() {
  return 4;
}
console.log(a() + a()); //output: 4, 8

//code 3
function a(b) {
  return b;
}
console.log(a(2) + a(4)); //output: 6

//code 4
function a(b) {
  console.log(b);
  return b * 3;
}
console.log(a(3));  //output: 3, 9

//code 5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10)); //output: 40

//code 6
function a(b) {
  if (b < 10) {
    return 2;
  } else {
    return 4;
  }
  console.log(b);
}
console.log(a(15)); //output: 4

//code 7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) ); //output: 10 3, 30

//code 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3); //output 3
console.log(4); //output 4

//code 9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a(); //output: 2, 5, 8, 11

//code 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10)); //output: 0,1,2,3,4,5,6,7,8,9,0

//code 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// output: undefined

//code 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}//output: undefined


//code 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z); //output: 10

//code 14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z); //output: 15, 10

//code 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z); //output: 15,15









