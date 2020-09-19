
// Coding Meetup #2 - Higher-Order Functions Series

// Kata: https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

// My Solution:

function countDevelopers(list) {
  // Using filter function to calculate the result
  return list.filter(e => {return e.continent === 'Europe'}).length
  }


// Kata: https://www.codewars.com/kata/58279e13c983ca4a2a00002a/javascript

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?

// My Solution:

function greetDevelopers(list) {
  list.forEach(stud => {
    stud.greeting = 'Hi '+stud.firstName+', what do you like the most about '+stud.language+'?';
  });
  return list;
}

// Kata: https://www.codewars.com/kata/5827acd5f524dd029d0005a4/javascript

// My Solution: 

function isRubyComing(list) {
  // Using some function to 
  const isRuby = (stud) => stud.language === 'Ruby';
  return list.some(isRuby);
}
