const people = require("./people.json");

console.log("<Vraag>");
console.log("Print de voornaam, leeftijd en hobbies van alle vrienden die exact dezelfde hobbies hebben als de bevriende persoon.");
console.log("Print deze informatie alleen als zowel de vriend als de bevriende persoon ouder zijn dan 70.");
console.log("Hobbies zijn ook hetzelfde als alleen de volgorde van de hobbies anders is.");
console.log("Als beide geen hobbies hebben dan hebben zij ook dezelfde hobbies.");
console.log('Bijvoorbeeld:\n...\nMabelle(86), hobbies: ["Basketball","Football","Running","Swimming"]\n...');

// Helper function to check whether arrays are identical.
// Because in JS ["a", "b"] != ["a", "b"] because they live
// in different places in memory (which I forgot, coming from Elixir).

// This function works by first sorting both arrays. These arrays both
// contain only strings, so calling `toSorted` without any arguments is
// fine. We're using `.toSorted()` because `.sort()` actually mutates
// the array in place, meaning it will be sorted in output, which was
// not the assignment.

// I then check the equality by serializing both to JSON and checking
// whether the strings are identical (because strings are not references
// in JS). This is dirty; but it works.

const equals = (a, b) =>
  JSON.stringify(a.toSorted()) == JSON.stringify(b.toSorted());

// I first look over the list of people to keep only people where
// the properyy `age` is bigger than 70. I then flatMap over this
// list of people to construct a list of friends.

// This goes in a few steps:
// - I loop over all people.
// - For each person, I loop over their friends.
// - I only keep friends where the sorted list of hobbies
//   is exactly identical to the sorted list of hobbies of
//   the original person.
// - Finally, the list of lists is flattened (by the flatMap)
//   into one semi-giant list of friends.

const friends = people
  .filter((p) => p.age > 70)
  .flatMap((p) => p.friends.filter((f) => equals(f.hobbies, p.hobbies)));

console.log("\n<Antwoord>");

// I then loop over the array that I just constructed, and
// print the desired information out in the desired format.
// I again use fancy JS string interpolation.

// I'm serializing hobbies to JSON because the demo printing
// above is doing that too. Not much use tbh, because JS already
// concats the array when interpolating it in a string.

friends.forEach((f) => {
  const hobbies = JSON.stringify(f.hobbies);
  console.log(`${f.name.first}(${f.age}), hobbies: ${hobbies}`);
});

// I'm sorry if the comments are getting shorter and shorter,
// but for me things like arrays and strings are so obvious
// I forget to point them out.
// Also typing these comments is at this point taking longer
// than actually writing the code.

// Also, at this point I've used `.filter` so many times it
// doesn't really need an explanation anymore LOL.
