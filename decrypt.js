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
    "FFH": "{\"",
    "F5": "},",
    "FF5": "}},",
    "FFF": "}}}",
    "F": "}",
    ":::": "[]",
    "::": "]",
    ":": "[",
    "++": ")",
    "+": "(",
    "\"": "'"
};

const quotedCaps = [
    ["\\\"\\*f", "\"F"], ["\\\"\\*b", "\"B"], ["\\\"\\*r", "\"R"], ["\\\"\\*p", "\"P"],
    ["\\\"\\*t", "\"T"], ["\\\"\\*l", "\"L"], ["\\\"\\*z", "\"Z"], ["\\\"\\*d", "\"D"],
    ["\\\"\\*h", "\"H"], ["\\\"\\*j", "\"J"], ["\\\"\\*n", "\"N"], ["\\\"\\*v", "\"V"],
    ["\\\"s\\*", "\"S"], ["\\\"c\\*", "\"C"], ["\\\"m\\*", "\"M"], ["\\\"w\\*", "\"W"],
    ["\\\"a\\*", "\"A"], ["\\\"e\\*", "\"E"], ["\\\"i\\*", "\"I"], ["\\\"g\\*", "\"G"],
    ["\\\"k\\*", "\"K"], ["\\\"o\\*", "\"O"], ["\\\"y\\*", "\"Y"], ["\\\"q\\*", "\"Q"],
    ["\\\"u\\*", "\"U"]
];

const normalCaps = [
    ["\\*f", "F"], ["\\*b", "B"], ["\\*r", "R"], ["\\*p", "P"], ["\\*t", "T"], ["\\*l", "L"],
    ["\\*z", "Z"], ["\\*d", "D"], ["\\*h", "H"], ["\\*j", "J"], ["\\*n", "N"], ["\\*v", "V"],
    ["s\\*", "S"], ["c\\*", "C"], ["m\\*", "M"], ["w\\*", "W"], ["a\\*", "A"], ["e\\*", "E"],
    ["i\\*", "I"], ["g\\*", "G"], ["k\\*", "K"], ["o\\*", "O"], ["y\\*", "Y"], ["q\\*", "Q"],
    ["u\\*", "U"], ["Q\\*", "Q"]
];

function replaceAll(input, replacements) {
    for (const [find, replace] of replacements) {
        input = input.replace(new RegExp(find, "g"), replace);
    }

    return input;
}

function decrypt(path) {
    let content = fs.readFileSync(path, "utf8");

    const replacements = Object.keys(lookup).sort((a, b) => b.length - a.length);
    const regex = new RegExp(replacements.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"), "g");

    let output = content.replace(regex, match => lookup[match]);

    output = replaceAll(output, quotedCaps);
    output = replaceAll(output, normalCaps);

    return JSON.parse(output).reverse();
}

module.exports = decrypt("encrypted-people.txt");
