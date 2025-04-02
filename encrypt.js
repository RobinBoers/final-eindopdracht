const fs = require("fs");

const lookup = {
    "void": "0",
    "u": "1",
    "U": "2",
    "z": "3",
    "T": "4",
    "t": "5",
    "x": "6",
    "_": "8",
    "HUGE": "9",
    "cam": "-",
    "com": ".",
    "6": "b",
    "B": "a",
    "e": "x",
    "k": "s",
    "K": "c",
    "-": "e",
    "j": "r",
    ")": "m",
    "@": "n",
    "2": "u",
    "H": "\"",
    ";": ":",
    "&": "g",
    "5": ",",
    "#": "f",
    "(": "l",
    "}": "i",
    "N": "d",
    "[": "j",
    "]": "k",
    "L": "t",
    "!": "o",
    "1": "v",
    "^": "w",
    "o": "y",
    "O": "z",
    "{": "h",
    "~": " ",
    "F": "}",
    "FF": "{",
    ":::": "[]",
    "::": "]",
    ":": "[",
    "++": ")",
    "+": "(",
    "\"": "'"
};

const rlookup = Object.fromEntries(Object.entries(lookup).map(([k, v]) => [v, k]));

function encrypt(path) {
  let content = fs.readFileSync(path, "utf8");

  const replacements = Object.keys(rlookup).sort((a, b) => b.length - a.length);
  const regex = new RegExp(replacements.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"), "g");

  return content.replace(regex, match => rlookup[match]);
}

console.log(encrypt("message.txt"))
