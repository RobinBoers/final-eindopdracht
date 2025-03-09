const people = require("./people.json");

console.log("<Vraag>");
console.log("Print per land wanneer er meer dan 7 personen wonen hoeveel personen welke hobby beoefenen.");
console.log("Tel vrienden ook mee als personen.");
console.log('Bijvoorbeeld:\n...\nUzbekistan, hobbies: {"Basketball":6,"Swimming":6,"Running":8,"Football":9}\n...');

// I'm reusing my exisiting implementation of Array.frequencies
// from question 14 here. Does not require additional explantion,
// I think.

Array.prototype.frequencies = function () {
  const freq = {};
  for (const i of this) {
    freq[i] = freq[i] ? freq[i] + 1 : 1;
  }

  return freq;
};

// I'm performing the same steps as previously (question 14), but this time
// I'm gonna actually need some of the intermediate variables later on, so
// let's make sure to save those.

// Our array of friends & giant array of everyone.
const friends = people.flatMap((p) => p.friends);
const everyone = people.concat(friends);

// Construct our object of country frequencies.
const countries = everyone.map((p) => p.location.country).frequencies();

// We convert the object into its entries, which gives us an array of
// arrays, in the following format: [[country0, count], [country1, count], ...]

// We then filter that array to only keep countries with more
// than 7 occurences, and then map over it again to get rid of the counts.
// This leaves us with an array containing just country names.
// (We can easily lookup the counts by calling `countries[name]`)

const relevant = Object.entries(countries)
  .filter(([_, count]) => count > 7)
  .map(([name, _]) => name);

// We then reduce over the array of people + friends (`everyone`)
// to split the people out over their respective countries,
// but only if the their current location is in a relevant country.

// To do this, we reduce over everyone, and:

// - if their country is not yet in the accumulator, insert an empty list.
// - if the person's country is in the list of relevant countries,
//   add them to the correct key in the accumulator.

// This gives us an object where the keys are country names, and the
// values are people.

const lookup = everyone.reduce((acc, p) => {
  const c = p.location.country;
  if (!acc[c]) acc[c] = [];
  if (relevant.includes(c)) acc[c].push(p);

  return acc;
}, {});

console.log("\n<Antwoord>");

// Finally, we have all the required data to start printing to STDOUT :D
// We loop over the relevant countries and lookup the amount of people
// living there. We also look up who those people are (the population).

// As a last step, we `flatMap` over the population to extract their
// hobbies and then take the frequencies of the final array, and yeet
// that all into a `console.log` statement. Great success!

// (I also JSON stringify the object because otherwise JS will, in
// it's infinite wisdom, print the dreaded, infamous, [object Object])

for (const c of relevant) {
  const count = countries[c];
  const population = lookup[c];

  const hobbies = population.flatMap((p) => p.hobbies).frequencies();
  console.log(`${c}(${count}), hobbies: ${JSON.stringify(hobbies)}`);
}
