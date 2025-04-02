#!/bin/bash

run() {
  sed -i 's|const people = require("./people.json");|const people = require("./decrypt.js");|' "$1"
  bun "$1"
  sed -i 's|const people = require("./decrypt.js");|const people = require("./people.json");|' "$1"
}

dir=$(dirname "$(realpath "$0")")

for file in $(find "$dir" -maxdepth 1 -type f -name "*.js" | sort); do
    run "$file"
    echo
    echo
done

