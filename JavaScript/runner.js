import { addingFractions } from "./src/adding-fractions/index.js";
import { anagrams } from "./src/anagrams/index.js";
import { balancedBrackets } from "./src/balanced-brackets/index.js";
import { maxProfitStocks } from "./src/max-profit-stocks/index.js";
import { mostCommonWord } from "./src/most-common-word/index.js";
import { palindrome } from "./src/palindrome/index.js";
import { removeDuplicates } from "./src/remove-duplicates/index.js";
import { stringCompression } from "./src/string-compression/index.js";

import { PROGRAM_CONSTANTS } from "./constants.js";

export const runner = (type) => {
  let inputArray;

  switch (type) {
    case PROGRAM_CONSTANTS.STRING_COMPRESSION:
      inputArray = ["AABBBCCCD", "ABCDE", "KKKKK", "", "Abcda", "a", "aaBBBa"];
      inputArray.forEach((input) => console.log(stringCompression(input)));
      break;

    case PROGRAM_CONSTANTS.MAX_PROFIT_STOCS:
      inputArray = [
        [2, 10, 7, 18, 8, 6, 14, 15, 20, 19],
        [18, 5, 20, 6, 9, 7, 3, 14, 2, 13],
        [11, 8, 6, 15, 10, 13, 2, 4, 12, 19],
        [15, 8, 3, 9, 5, 2, 1, 11, 6, 7],
        [4, 19, 6, 3, 13, 11, 8, 17, 16, 14],
        [5, 1, 16, 6, 7, 9, 20, 18, 17, 2],
        [3, 1, 11, 7, 8, 14, 18, 12, 17, 8],
        [17, 18, 15, 13, 8, 7, 9, 20, 19, 10],
        [12, 15, 19, 17, 3, 20, 16, 14, 6, 4],
        [5, 4, 3, 18, 6, 12, 8, 10, 20, 15],
      ];
      inputArray.forEach((input) => console.log(maxProfitStocks(input)));
      break;

    case PROGRAM_CONSTANTS.PALINDROME:
      inputArray = [
        "dollop",
        "level",
        "Ana",
        "A car, a man, a maraca.",
        1010,
        101,
        "abc|@#~cba",
      ];
      inputArray.forEach((input) => console.log(palindrome(input)));
      break;

    case PROGRAM_CONSTANTS.BALANCED_BRACKETS:
      inputArray = ["[]", "[{}]", "<>[]{}", "[{}<>({})]", "[{]", "{()[}}"];
      inputArray.forEach((input) => console.log(balancedBrackets(input)));
      break;

    case PROGRAM_CONSTANTS.MOST_COMMON_WORD:
      inputArray = [
        "dog Dog dog Cat cat",
        "this! test@ case includes' special characters, test",
        "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
      ];
      inputArray.forEach((input) => console.log(mostCommonWord(input)));
      break;

    case PROGRAM_CONSTANTS.REMOVE_DUPLICATES:
      inputArray = [
        [1, 14, 8, 7, -20, 9, 3, 5, 6, 4, 14, 8, 7, 20, 9, 0],
        [8, 7, 14, 16, 15, -4, 2, 8, 7, 14, 16, 15, 9, 3, 6],
        [9, 3, -20, 5, 18, 17, 9, 3, 20, 14, 13, 1, 7, 6, 10],
        [12, 13, -9, 20, 19, 8, 7, 17, 4, 2, 14, 6, 20, 19, 8],
        [3, 11, 4, 1, 9, 9, 2, 6, 6, 15, 20, 10, 16, 7, 12],
        [17, 15, 1, 7, 2, 8, 14, 16, 19, 11, 12, 18, 13, 4, 5],
        [18, 5, 1, 1, 20, 20, 9, 12, 6, 7, 7, 10, 17, 2, 13],
        [17, 11, -5, 3, 17, 7, 7, -1, 4, 8, 13, 6, 2, 14, 16],
        [5, 16, 8, 12, 14, 14, 18, 18, 14, 15, 11, 6, 9, 1, 7],
        [12, 15, 16, 2, 8, 13, 2, 14, 14, 6, 18, 9, 20, 15, 19],
        [18, 5, 5, 14, 13, 8, 12, 3, 12, 3, 20, 9, 11, 16, 4],
        [2, 18, 13, 18, 1, 5, 16, 10, 8, 4, 7, 9, 14, 1, 12],
        [15, 9, 13, 13, -13, 12, 5, -20, 8, 19, 17, 20, 6, 18, 4],
        [13, 16, 16, 2, 19, 4, 15, 15, 20, 17, 3, 7, 14, 12, 3],
        [1, 14, 19, -2, -2, 10, 10, 13, 15, 16, 18, -10, 8, 3, 11],
        [10, 8, -16, 14, 2, 2, 9, 13, 1, 5, 5, 18, 20, 16, 12],
        [1, 13, 6, 16, 10, 2, 10, 17, 9, 14, 8, 12, 12, 15, 7],
        [4, 8, 19, 5, 6, -11, 12, 16, 1, 18, 9, 3, 13, 7, 2],
        [20, 17, 6, 9, 2, 2, 3, 3, 3, 11, 19, 13, 18, 12, 5],
        [13, 18, 10, 19, 3, 2, 1, 1, 14, 7, 16, 16, 4, 13, 20],
      ];
      inputArray.forEach((input) => console.log(removeDuplicates(input)));
      break;

    case PROGRAM_CONSTANTS.ANAGRAMS:
      inputArray = [
        { word1: "salvages", word2: "Las Vegas" },
        { word1: "none", word2: "neon" },
        { word1: "year two thousand", word2: "a year to shutdown" },
        { word1: "the tennis pro", word2: "he in net sport" },
        { word1: "capture", word2: "door holder" },
      ];
      inputArray.forEach((input) => console.log(anagrams(input)));
      break;

    case PROGRAM_CONSTANTS.ADDING_FRACTIONS:
      inputArray = [
        [1, 2, 3, 2],
        [1, 3, 3, 9],
        [1, 5, 3, 15],
        [1, 8, 3, 16],
      ];
      inputArray.forEach((input) => console.log(addingFractions(input)));
      break;

    default:
      console.log("WRONG TYPE");
  }
};
