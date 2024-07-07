import mediaData from "./dataAssets/mediaData.js";


/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/


function getUniqueTags(data) {

  // with an object for lookup reference, map, flat, and filter
  const alltags = data.map(({ tags }) => tags).flat();
  const uniqueTags = {};
  return alltags.filter(tag => {
    // look up the tag in tracking object
    if (!uniqueTags[tag]) {
      // if tag is not in the ref obj, it is unique, add to ref obj w/val of true
      uniqueTags[tag] = true;
      return true;
    }
    return false;
  })

  // with map, flat, and Set
  // const alltags = data.map(({tags}) => tags).flat();
  // return [...new Set(alltags)];

  // with map, flat, and filter
  return data.map(({ tags }) => tags)
    .flat()
    .filter((el, index, arr) => {
      return arr.indexOf(el) === index;
    })
}

console.log(getUniqueTags(mediaData));
