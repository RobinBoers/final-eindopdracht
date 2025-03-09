const people = require("./people.json");

console.log("<Vraag>");
console.log("Print de gemiddelde leeftijd van alle vrienden.");
console.log("Bijvoorbeeld: 59.801292323");

// This is a combination of question 6 and question 9.
// I construct an array of all friends and then calculate
// the sum by reducing over it.

// I do it in two separate steps rather than a single line,
// because I need the length of the intermediate array of
// friends in order to calculate the final average.

const friends = people.flatMap((p) => p.friends);
const sum = friends.reduce((acc, f) => acc + f.age, 0);

console.log("\n<Antwoord>");
console.log(sum / friends.length);
