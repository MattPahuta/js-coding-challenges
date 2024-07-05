const emojis = {
  "smile": "😊",
  "angry": "😠",
  "party": "🎉",
  "heart": "💜",
  "cat": "🐱",
  "dog": "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  let testWord = word.toLowerCase(); // ensure word is lowercase

  if (testWord.startsWith(':') && testWord.endsWith(':')) { // check if ':' present at start & end
    let slicedWord = testWord.slice(1, -1); // slice the colons
    return emojis[slicedWord] ? emojis[slicedWord] : slicedWord; // look up emoji, return emoji or sliced word
  } else { // or, if no colons at start & end, return the original word
    return word;
  }


}

function emojifyPhrase(phrase) {
  return phrase.split(' ') // split phrase to an array
    .map(emojifyWord) // map over array, run emojifyWord func on eact element
    .join(' ') // join resulting array to string
}


console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));