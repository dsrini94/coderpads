export const palindrome = (input) => {
  return inBuiltMethodWay(input);

  return forLoopWay(input);
};

const cleanInput = (input) => {
  const parsedInput = typeof input === "string" ? input : input.toString();
  const cleanedInput = parsedInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedInput;
};

const inBuiltMethodWay = (input) => {
  const cleanedInput = cleanInput(input);
  const reversedString = cleanedInput.split("").reverse().join("");
  return cleanedInput === reversedString;
};

const forLoopWay = (input) => {
  const cleanedInput = cleanInput(input);

  for (let i = 0; i < Math.floor(cleanedInput.length / 2); i++) {
    if (cleanedInput[i] !== cleanedInput[cleanedInput.length - 1 - i])
      return false;
  }
  return true;
};
