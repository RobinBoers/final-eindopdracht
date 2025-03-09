const people = require("./people.json");

console.log("<Vraag>");
console.log('Print het aantal personen dat "Football" als hobby heeft en "Swimming" niet als hobby heeft.');
console.log("Tel vrienden niet mee als personen.");
console.log("Bijvoorbeeld: 63");

// Helper to make the query better fit on a single line.
// This function checks if the given person (p) has the
// given hobby in their array of hobbies. Returns a boolean.
has = (p, hobby) => p.hobbies.includes(hobby);

// Filters the list of people to keep only objects
// where the p.hobbies array contains at least "Football"
// and does not contain "Swimming" as well.
// Any other hobby is ignored.
const n = people.filter((p) => has(p, "Football") && !has(p, "Swimming"));

// Like basically always, I print the length of the
// resulting array to STDOUT.

console.log("\n<Antwoord>");
console.log(n.length);
