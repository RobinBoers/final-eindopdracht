const people = require("./people.json");

console.log("<Vraag>");
console.log("Print het aantal personen dat ouder is dan 30 en jonger is dan 35.");
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 8");

// Filters the array of people to only keep objects
// where the property `age` is higher than 30 and lower than 35.
const n = people.filter((p) => p.age > 30 && p.age < 35);

// I then take the length of said array.

console.log("\n<Antwoord>");
console.log(n.length);
