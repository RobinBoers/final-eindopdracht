const people = require("./people.json");

console.log("<Vraag>");
console.log('Print het aantal personen dat niet in "Bulgaria" is en ook niet in "Ecuador" is.');
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 290");

// Filters the array of people to only keep objects
// where the value of `location.country` is not in the array of
// countries from the question.
const n = people.filter(
  (p) => !["Bulgaria", "Ecuador"].includes(p.location.country)
);

// I then take the length of said array.

console.log("\n<Antwoord>");
console.log(n.length);
