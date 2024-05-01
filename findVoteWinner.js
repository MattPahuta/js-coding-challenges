/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5
}

function findTheWinner(obj) {
  // with Object.keys, reduce, and a ternary
  // let winner = Object.keys(obj).reduce((a,b) => {
  //   return obj[a] > obj[b] ? a : b
  // })
  // return `The winner is ${winner} with ${obj[winner]} votes!`

  // with for...in loop
  let highestVotes = 0; // track highest votes (value)
  let winningItem = '' // track winning item (property)

  for (const food in obj) {
    if (obj[food] > highestVotes) {
      highestVotes = obj[food];
      winningItem = food;
    }
  }
  return `The winner is ${winningItem} with ${highestVotes} votes!`
}

console.log(findTheWinner(gameNightFood));