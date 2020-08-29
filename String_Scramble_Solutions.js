// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// My solution:
function scramble(str, arr) {
  let newStr ='';
  [...str].forEach((character, index) => {
    newStr+=str[arr.indexOf(index)];
  })
  return newStr;
};
