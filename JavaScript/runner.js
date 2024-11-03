import { stringCompression } from "./src/string-compression/index.js";

export const runner = (type) => {
  switch (type) {
    case "STRING_COMPRESSION":
      const inputArray = [
        "AABBBCCCD",
        "ABCDE",
        "KKKKK",
        "",
        "Abcda",
        "a",
        "aaBBBa",
      ];
      inputArray.forEach((input) => console.log(stringCompression(input)));
      break;

    default:
      console.log("WRONG TYPE");
  }
};
