export const balancedBrackets = (input) => {
  const stack = [];
  const openingBrackets = ["(", "{", "[", "<"];
  const correspondingOpeningBrackets = {
    "}": "{",
    "]": "[",
    ">": "<",
    ")": "(",
  };

  for (let i = 0; i < input.length; i++) {
    if (openingBrackets.includes(input[i])) stack.push(input[i]);
    else if (correspondingOpeningBrackets[input[i]] === stack[stack.length - 1])
      stack.pop();
    else return false;
  }

  return stack.length === 0;
};
