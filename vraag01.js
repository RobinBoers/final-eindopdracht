const people = require("./people.json");

console.log("<Vraag>");
console.log("Print het aantal personen dat is getrouwd.");
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 150");

// Filters the array of people to only keep objects
// where `married` is set to a truthy value.
const married = people.filter((p) => p.married);

// I then take the length of said array.

console.log("\n<Antwoord>");
console.log(married.length);
