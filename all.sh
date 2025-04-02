#!/bin/bash

dir=$(dirname "$(realpath "$0")")

for file in $(find "$dir" -maxdepth 1 -type f -name "*.js" | sort); do
    bun "$file"
    echo
    echo
done
