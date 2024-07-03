function altCaps(str) {
  // loop through string
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i]
    }
  }

  // return newStr;
  // with split, map and join - make string all lowercase first
  return str.toLowerCase().split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join('');

}

console.log(altCaps("I'm so happy it's Monday")); // => "I'M So hApPy iT'S MoNdAy"
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts")); // => "WhEn yOu vIsIt..."