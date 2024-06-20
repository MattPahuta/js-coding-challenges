const products = [
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
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory products.

Expected output: 9.97  
*/

function totalSavory(arr) {
  // with a if statement
  return arr.reduce((sum, item) => {
    // if item is savory
    if (item.type === "savory") return sum + item.price;
    // if not savory
    return sum;
  }, 0)

  // reduce w/ternary
  return arr.reduce((sum, item) => {
    return (item.type === "savory") ? sum + item.price : sum
  }, 0)
}

console.log(totalSavory(products));
