const people = require("./people.json");

console.log("<Vraag>");
console.log("Print het aantal personen dat ouder is dan 98 of jonger is dan 25.");
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 8");

// Filters the array of people to only keep objects
// where the property `age` is higher than 98 or lower than 25.
const n = people.filter((p) => p.age > 98 || p.age < 25);

// I then take the length of said array.

console.log("\n<Antwoord>");
console.log(n.length);
