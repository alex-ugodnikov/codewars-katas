// link to Kata: https://www.codewars.com/kata/5539fecef69c483c5a000015/train/javascript
// Description: Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// My Solution:


function backwardsPrime(start, stop){

  // function to determine if a number is Prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i=2; i<Math.sqrt(num)+1;i++) {
      if (num % i === 0) return false;
      }
    return true;
  }

  // function to determine if a backwards number is prime
  function isPrimeBackwards (num) {
    num = num.toString();
    let reverseNum = num.split("").reverse().join("");
    return reverseNum !== num && isPrime(reverseNum) ? true : false;
  }

// if a number isPrime and isBackwards, push it to array
let resultsArr = [];
for (let i=start; i<=stop; i++) {
  if (isPrime(i))
   if (isPrimeBackwards(i)) resultsArr.push(i)
  }

return resultsArr;
}
