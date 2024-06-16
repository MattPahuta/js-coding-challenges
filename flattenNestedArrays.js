
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyScores2 = [
  [39, 99, 76, [44, 88, 99]], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr) {
  // *** various methods *** //
  // ********************** //

  // *** 2 dimensional arrays only *** //

  // ** with a loop, push, conditional, Array.isArray
  /* 
    - if item is a string or number, push element to flatArr
    - if item is an array, loop through it, push each item to flatArr
  */
  // const flatArr = [];
  // arr.forEach(element => {
  //   if (Array.isArray(element)) {
  //     element.forEach(item => flatArr.push(item))
  //   } else {
  //     flatArr.push(element)
  //   }
  // });
  // return flatArr;

  // ** built-in flatten method
  // return arr.flat();

  // *** more robust multi-dimensional array methods *** //

  // ** with reduce and recursion
  // return arr.reduce((acc, currVal) => Array.isArray(currVal) ? acc.concat(flatten(currVal)) : acc.concat(currVal), []);

  // ** with spread and some
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr;


}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
console.log(flatten(kittyScores2));