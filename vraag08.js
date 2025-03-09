const people = require("./people.json");

console.log("<Vraag>");
console.log("Print het totale aantal vrienden waarvan de bevriende persoon niet getrouwd is.");
console.log("En de vrienden jonger zijn dan 30.");
console.log("Bijvoorbeeld: 28");

// Same as in question 7, but this time I reversed the condition that
// checks whether peeple are married :)

// The only change is that I'm now filtering the constructed
// array of friends yet again, to make sure their `age` is lower than 30.

const n = people
  .filter((p) => !p.married)
  .flatMap((p) => p.friends)
  .filter((f) => f.age < 30);

// And like always, I take the length of the array and print it :)

console.log("\n<Antwoord>");
console.log(n.length);
