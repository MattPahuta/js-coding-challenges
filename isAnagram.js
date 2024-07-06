/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false


Check for:
- strings equal length
- sorted in alphabetical order both strings equal?
  - true = anagram

*/

function isAnagram(str1, str2) {
  // unnecessary:
  // if (str1.length !== str2.length) return false;
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("allergy", "gallery")); // => true
console.log(isAnagram("treasure", "measure")); // => false
