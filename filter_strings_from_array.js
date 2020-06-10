// ************************************************************************************
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// ************************************************************************************

// My Solution:
function filter_list(l) {
  var newArr =[];
  l.forEach(element => {
    if (typeof element != 'string') newArr.push(element);
    })
  return newArr;
  }
  
// Best Solution:
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
