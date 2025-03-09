const people = require("./people.json");

console.log("<Vraag>");
console.log("Print per land wanneer er minstens 7 personen wonen hoeveel personen er wonen.");
console.log("Tel vrienden ook mee als personen.");
console.log("Bijvoorbeeld:\n...\nUzbekistan, aantal personen: 10\nGreece, aantal personen: 7\n...");

// I extend the Array prototype to add a method to all arrays.
// Specifically, I'm defining a method that gives me the
// frequency of elements in the array. This is basically a port
// of the Enum.frequencies/1 function from the Elixir standard
// library to JS. (Yes, I'm an Elixir fanboy, as you might have noticed.)

// This works by looping over all items in the array. For each item,
// I check if there is already a corresponding key in the `freq` object.
// If not, I set it to 1. Otherwise, I increment it by one. I return
// the resulting object, which will contain the elements of the array
// (deduplicated) as keys, and the amount of times they occured as values.

Array.prototype.frequencies = function() {
  const freq = {};
  for (const i of this) {
    freq[i] = freq[i] ? freq[i] + 1 : 1;
  }

  return freq;
};

// Then, first, I create an array of friends, like I've done many
// times already now. (So it doesn't really need any more explanation).

const friends = people.flatMap((p) => p.friends);

// Then I concat this array with the existing array of people
// to get one giantic array of ALL people. I then map over this array
// to get an array that contains a lot of country names.

// I then take the frequencies of the countries to see how many times
// they occured in my array. This results in an object where the keys
// are the names of the countries, and the values are the amount of times
// they were in our giant array.

const countries = people.concat(friends).map((p) => p.location.country).frequencies();

console.log("\n<Antwoord>");

// Finally, we iterate over the countries object. If the count is higher
// or equal to 7, we print the desired output using fancy JS string
// interpolation. Otherwise, we continue to the next country.

for (const [country, count] of Object.entries(countries)) {
  if (count >= 7) console.log(`${country}, aantal personen: ${count}`);
}
