// ************************************************************************************
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]
// ************************************************************************************


//////// my solution: ////////
function getMiddle(s)
{
if (s.length % 2 === 0) 
  return s.slice(s.length / 2 - 1, s.length / 2 + 1 );
    return s[Math.trunc(s.length / 2)];
}

//////// the best solution: ////////
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
