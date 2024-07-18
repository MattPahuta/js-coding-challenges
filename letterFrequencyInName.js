/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  // with string/array methods, for loop:
  const countObj = {};
  // normalize string
  const name = str.toLowerCase().split(' ').join('');
  // loop through name
  for (let i = 0; i < name.length; i++) {
    // if character is not in the object, add it, give it value of 1
    if (!countObj[name[i]]) {
      countObj[name[i]] = 1;
      // character is already in object, increment the char's value
    } else {
      countObj[name[i]] += 1;
    }
  }
  return countObj;

  // with methods, forEach, and ternary
  // eliminate spaces 
  const normalizedStrArr = str.replaceAll(" ", "").toLowerCase().split('')
  let countsObj = {}
  normalizedStrArr.forEach(char => {
    countsObj[char] ? countsObj[char] += 1 : countsObj[char] = 1
  })

  return countsObj
}

console.log(countChars("Peggy Porth"));