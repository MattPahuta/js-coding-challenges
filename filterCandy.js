
const items = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
  },
  {
    item: "🍬",
    price: .89,
    type: "sweet",
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
  },
]

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  // filter to get products where type === 'sweet'
  return data.filter(({ type }) => (
    type === 'sweet'
  // return a new array of filtered items with item and price props only
  )).map(({ item, price }) => (
    { item, price }
  ))
};

console.log(getSaleItems(items))