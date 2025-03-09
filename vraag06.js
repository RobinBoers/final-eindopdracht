const people = require("./people.json");

console.log("<Vraag>");
console.log("Print de voornaam en leeftijd van alle vrienden die minstens 103 oud zijn.");
console.log("Bijvoorbeeld:\n...\nKiley, leeftijd: 103\nYolanda, leeftijd: 103\n...");

// I first construct an array of all people's friends.
// The flatMap function (which is straight up stolen from
// Elixir's Enum.flat_map/2 btw!) evaluates the callback
// for each item, and then merges the returned arrays from
// the callback into a single array.

// I then filter the array to only keep objects where the
// property `age` is higher or equal to 103.

const friends = people.flatMap((p) => p.friends).filter((p) => p.age >= 103);

console.log("\n<Antwoord>");

// I loop through my array of the old friends and for each
// friend I print the first name and age. For this, I use
// fancy JS string interpolation.

friends.forEach((p) => {
  console.log(`${p.name.first}, leeftijd: ${p.age}`);
});
