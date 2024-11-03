export const stringCompression = (input) => {
  let count = 1;
  let compressedString = "";

  if (!input) return input;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) count++;
    else {
      compressedString += `${input[i]}${count}`;
      count = 1;
    }
  }
  return compressedString;
};
