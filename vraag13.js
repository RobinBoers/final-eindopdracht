const people = require("./people.json");

console.log("<Vraag>");
console.log("Print de namen en de hoeveelheid hobby's van vrienden die een leeftijdsverschil van minimaal 20 jaar hebben met de bevriende persoon (die niet getrouwd is), en ook niet in hetzelfde land wonen. Print ook naam van de bevriende persoon.");
console.log("Bijvoorbeeld:\n...\nOlaf (81) is friends with Linnea (57) with an age gap of 24 and has 1 hobbies.\n...")

// Returns the age difference between two people.
const diff = (p, f) => Math.abs(p.age - f.age);

// Checks whether a person+friend combination is
// relevant according to the question.
const y = (p, f) => diff(p, f) >= 20 && f.location.country != p.location.country;

const n = people
  .filter((p) => !p.married)
  .flatMap((p) =>
    // I filter the friends for the minimum age gap and then
    // add a property `friend` that cointains the 'parent' object.
    p.friends.filter((f) => y(p, f)).map((f) => Object.assign(f, { friend: p }))
  );

console.log("\n<Antwoord>");

n.forEach((f) => {
  console.log(`${f.name.first} (${f.age}) is friends with ${f.friend.name.first} (${f.friend.age}) with an age gap of ${diff(f.friend, f)} and has ${f.hobbies.length} hobbies.`);
});