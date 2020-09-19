// Kata: https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

//You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//Your task is to return the number of JavaScript developers coming from Europe.

// My Solution:

function countDevelopers(list) {
  // Using filter function to calculate the result
  return list.filter(e => {return e.continent === 'Europe'}).length
  }
