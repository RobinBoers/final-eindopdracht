const people = require("./people.json");

console.log("<Vraag>");
console.log("Print de gemiddelde leeftijd van alle personen.");
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 62.12");

// I reduce over the array to get the sum of all ages.
// For each person in the array, the callback is called.
// The first argument of the callback starts of at 0 (because
// that is what I passed as the starting value to the `reduce`
// method). The returned value becomes the argument (`acc`) 
// for the next iteration.

// Every iteration, I add the person's age to the sum. This
// process is called accumulating (hence the name `acc`).

const sum = people.reduce((acc, p) => acc + p.age, 0);

// And then lastly, I divide the sum of the ages by the
// amount of people, to get the average age.

console.log("\n<Antwoord>");
console.log(sum / people.length);
