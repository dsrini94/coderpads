import { balancedBrackets } from "./src/balanced_brackets/index.js";
import { maxProfitStocks } from "./src/max-profit-stocks/index.js";
import { stringCompression } from "./src/string-compression/index.js";
import { palindrome } from "./src/palindrome/index.js";

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

    default:
      console.log("WRONG TYPE");
  }
};
