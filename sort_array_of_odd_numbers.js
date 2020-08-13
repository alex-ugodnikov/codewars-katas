// Task: You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//My solution:

function sortArray(array) {
  // Return a sorted array.
  if (array.length == 0) return [];
let arrayOfOdds = array.filter(i => i % 2 > 0).sort((a,b)=> a-b);
let arrayOfEven = array.filter(i => i % 2 == 0);

let i2 = 0;
let sortedArray = [];

for (let i=0; i<array.length; i++) {
  if (array[i] % 2 > 0) {
    sortedArray.push(arrayOfOdds[i2]);
    i2++;
  }else{sortedArray.push(array[i]);}
}
return sortedArray;
}
