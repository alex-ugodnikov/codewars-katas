// Task: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// My solution:
var moveZeros = function (arr) {
  let arrayOfZeros = [] //declaring array of Zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===0) {
      // if 0 found, removing from original array and adding to arrayOfZeros
      arr.splice(i,1); 
      arrayOfZeros.push(0);
      //decrease index because size of arr changed
      i--;
    }
  }
  return arr.concat(arrayOfZeros); //return 2 arrays combined
}
