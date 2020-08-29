// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// My Solution:

function deleteNth(arr,n){
  // Using filter to calculate the number of occurences of the element.
  // If number of occurences higher then n, using splice to remove the last occurence
  for (i=1; i<=arr.length; i++) {
    if (arr.filter(elem => elem == arr[i]).length > n) {
      arr.splice(arr.lastIndexOf(arr[i]), 1);
      i--;
    }
  }
  return arr;
}
