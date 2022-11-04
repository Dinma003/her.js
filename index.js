// assignment 1
const firstNumber = 20
const secondNumber = 30
if(firstNumber + secondNumber === 50){
    console.log('true')
}else{
    console.log('false')
}

//assignmeent 2
const arr = [];
if(arr < 0){
    console.log('negative')
}else{
    console.log('postive')
}

//assignment 3
let names = ['obi','joe','john']
names.unshift('pyc')
console.log(names)
names.shift()
console.log(names)

//assignment 4
function largestVal(x,y,z){
largestVal = 0;
if(x > y){
    largestVal = x;
}else{
    largestVal = y;
}
if(z > largestVal){
    largestVal = z;
}
return largestVal;
}
console.log(largestVal(1,2,3))

//assignment 5
function nearest(a,b,c){
    let a1 =100 - a
    let b1 =100 - b
    if (a1 > b1){
    return b + "is nearest"
}else{
    return a + "is nearest"
}
console.log(nearest())

//assignment 6
function threeNumber (a,b,c)
if(a >= b >= c){
    console.log(30)
}else if( a >= b){
console.log(40)
}else{
    console.log(20)
}

//assignment 7
function reverseString(str){
return str.split(" ").reverse().join("")
}
console.log(reverseString("world"))

//assignment 9
let string = "book"
let array = string.split(" ");
console.log(array)

//assignment 10
var testObj ={
    13 : "mikel",
    9 : "tony", 
    20 : "obi"
};
var singerNumber = 9
var singer = testObj[singerNumber]