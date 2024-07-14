import podcasts from "./dataAssets/podcastData.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/

function createDescriptionsFor(data) {
  // loop through data and return a new array of objects
  // - add a description property
  // - destructure title, duration, genre, and hosts
  // - `${title} is a ${duration} minute ${genre} podcast hosted by ${hosts[0]}.`


  // *** returning descriptions with only the first host ***
  return data.map((pod) => {
    // destructure pod props needed for description
    const { title, duration, genre, hosts } = pod
    // return updated objects w/description prop
    return {
      ...pod,
      description: `${title} is a ${duration} minute ${genre} podcast hosted by ${hosts[0]}.`
    };
  })

  // stretch goal: all hosts added to description w/proper grammer
  // - if hosts.length === 1, return hosts[0]
  // - if hosts.length > 1
  //    - loop through hosts
  //    - Return new array joined by ','
  //    - If last host in list, add 'and'
  //    - Add '.' to end of string

  return data.map((pod) => {
    // build hosts string
    const hostsString = pod.hosts.map((name, index, arr) => {
      if (arr.length === 1) {
        return name;
      } else {
        return index === arr.length - 1 ? `and ${name}` : `${name}, `
      }
    }).join('')
    // return updated objects w/description
    return {
      ...pod,
      description: `${pod.title} is a ${pod.duration} minute ${pod.genre} podcast hosted by ${hostsString}.`
    }
  })

}

console.log(createDescriptionsFor(podcasts))