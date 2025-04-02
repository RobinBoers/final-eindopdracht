#!/bin/bash

./all.sh > temp0
./all-decrypted.sh > temp1

diff temp0 temp1
rm temp0 temp1
