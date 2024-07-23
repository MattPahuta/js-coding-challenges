/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce"
]

function removeDupesFromArray(arr) {
  // *** with forEach, includes, push
  // const uniqueItems = [];
  // arr.forEach(item => {
  //   if (!uniqueItems.includes(item)) {
  //     uniqueItems.push(item)
  //   }
  // })
  // return uniqueItems;

  // *** with Set
  return [...new Set(arr)];

  // *** with an object for tracking, filter
  const trackDups = {};
  return arr.filter(item => {
    if (!trackDups[item]) {
      trackDups[item] = true;
      return true;
    }
    return false;
  });

  // *** with filter and indexOf
  const uniqueElements = arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  })

  return uniqueElements;

}

console.log(removeDupesFromArray(eggScrambleRecipe));