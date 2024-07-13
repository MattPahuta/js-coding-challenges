import podcasts from "./dataAssets/podAwardData.js";

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 


  // ** with reduce and recursion
  // return arr.reduce((acc, currVal) => Array.isArray(currVal) ? acc.concat(flatten(currVal)) : acc.concat(currVal), []);

*/
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(podData) {

  // with reduce and concat
  // const allHosts = podData.reduce((acc, curr) => acc.concat(curr.hosts), []);

  // with reduce and spread
  return podData.reduce((acc, curr) => [...acc, ...curr.hosts], []);
}

function assignAwards(data) {
  return data.map(host => {
    const randomAward = awards[Math.floor(Math.random() * awards.length)]
    return `${randomAward} ${host}`
  });
}


console.log(getHosts(podcasts));
console.log(assignAwards(getHosts(podcasts)));