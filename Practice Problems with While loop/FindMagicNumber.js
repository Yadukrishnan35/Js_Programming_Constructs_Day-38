/*
Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..
*/
const prompt = require('prompt-sync')();
let num = parseInt(prompt('Enter a number[1 to 100] to check if it is a magic number: '));
let copy = num;
let sum = 0;
while(copy > 0 || sum > 9) {
    if(copy == 0){
        copy = sum;
        sum = 0;
    }
    sum = sum + copy % 10;
    copy = Math.floor(copy / 10);
}
if(sum == 1){
    console.log(num + " is a magic number");
}
else{
    console.log(num + " is not a magic number");
}