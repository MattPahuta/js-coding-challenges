/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

// group: 'animal bug'
// group: 'plant other'

function clearTheGarden(arr) {
  // filter by group property
  // return only groups: 'animal bug' or 'plant flower
  return arr.filter(({ group }) => group === 'animal bug' || group === 'plant flower')
}


fetch(api)
  .then(response => response.json())
  .then(result => clearTheGarden(response))
  .then((data) => {
    data.forEach(emoji => {
      flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
    });
  })
  .catch(err => console.log(err));