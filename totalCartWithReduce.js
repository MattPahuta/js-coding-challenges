const shoppingCart = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
    onSale: false
  },
  {
    item: "🍬",
    price: .89,
    type: "sweet",
    onSale: false
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
    onSale: false
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
    onSale: true
  },
]

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  const total = arr.reduce((acc, currVal) => acc + currVal.price, 0);
  return total.toFixed(2)
}

console.log(total(shoppingCart));