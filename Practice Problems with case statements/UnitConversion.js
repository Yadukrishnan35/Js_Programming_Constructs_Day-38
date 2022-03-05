/*Write a program that takes User Inputs and does Unit Conversion of

different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet
*/

const prompt = require('prompt-sync')();
let num = prompt("Enter a number[1, 10, 100, 1000, etc]: ");

switch(num)
{
    case '1':
        console.log("unit");
        break;
    case '10':
        console.log("tens");
        break;
    case '100':
        console.log("hundred");
        break;
    case '1000':
        console.log("thousand");
        break;
    case '10000':
        console.log("tens of thousand");
        break;
    case '100000':
        console.log("lacs");
        break;
    default:
        console.log("Wrong Entered.")
}