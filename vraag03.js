const people = require("./people.json");

console.log("<Vraag>");
console.log('Print het aantal personen waarvan "Mango" hun favoriete eten is.');
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 100");

// Filters the array of people to only keep objects
// where the property `favoriteFood` is equal to the string "Mango".
const n = people.filter((p) => p.favoriteFood == "Mango");

// I then take the length of said array.

console.log("\n<Antwoord>");
console.log(n.length);
