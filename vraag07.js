const people = require("./people.json");

console.log("<Vraag>");
console.log("Print het totale aantal vrienden waarvan de bevriende persoon getrouwd is.");
console.log("Bijvoorbeeld: 240");

// Like in question 1, I first filter the array of people
// to only get the married people.

// Like in question 6, I then flatMap over that array to
// construct an array of all the friends of the married people.

const n = people.filter((p) => p.married).flatMap((p) => p.friends);

// And finally, I take the length of that array and print it out.

console.log("\n<Antwoord>");
console.log(n.length);
