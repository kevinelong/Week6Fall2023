//pg 10 section 1-7 FIND
// function isOver60(arrayValue) {
//     // if (arrayValue > 60) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// }
// const isOver60 = v => v > 60;

//FIND, FINDS ONLY, THE ONE/FIRST MATCHING ITEM.

//test data - an Array of Numbers
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

//OLD TEST
// let firstValOver60 = numbers.find(isOver60); // returns 64

// if (firstValOver60 != undefined) {
//     console.log(firstValOver60);
// } else {
//     console.log("No values over 60");
// }

// NEW SHORTER
// console.log( numbers.find( isOver60 ) );
// console.log( numbers.find( v => v > 60 ) );

//FIND - SHORTEST IMPLEMENTATION
console.log(numbers.find(v => v > 60));

//FILTER - returns array list of all matching values
console.log(numbers.filter(v => v > 60));

