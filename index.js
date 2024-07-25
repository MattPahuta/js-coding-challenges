/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game');
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr) {
  // filter supplied arr for only group: 'food fruit'
  // - group property that only includes the word 'fruit'
  // console.log(arr)
  const fruitOnly = arr.filter(foodItem => foodItem.group === 'food fruit');
  // console.log(fruitOnly)
  getRandomFruits(fruitOnly)
  // return fruitOnly;
}

// makeFruitArray(getData())

function getRandomFruits(arr) {
  // accept array of fruits 
  // inititialize a new array to hold 9 random fruits
  const randomFruits = [];
  // loop 9 times
  for (let i = 0; i < 9; i++) {
    const randomIndex = [Math.floor(Math.random() * arr.length)];
    randomFruits.push(arr[randomIndex])
  }
  // - generate random number each iteration
  // - number as index of arr
  // - push random fruit to new array
  // Return new array
  // console.log(randomFruits)
  generateFruitHTML(randomFruits)
}

function generateFruitHTML(fruits) {
  let html = '';
  for (let fruit of fruits) {
    // console.log(fruit)
    html += `<li>${fruit.htmlCode[0]}</li>`
  }
  // console.log(html)
  slotMachine.innerHTML = html
}

async function getData() {
  const url = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json();
    // console.log(data)
    makeFruitArray(data)
  } catch (error) {
    console.log(error.message)
  }

}

getData()