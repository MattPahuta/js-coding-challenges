

function capitalizeWord(word) {
  // concatenate first index w/slice
  return word[0].toUpperCase() + word.slice(1);
}


function toTitleCase(str) {
  return str.split(' ').map(capitalizeWord).join(' ')
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));