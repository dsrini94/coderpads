export const removeDuplicates = (input) => {
  //using inbuilt method
  // return usingInBuiltMethod(input);

  //using hash Method
  return usingHashMethod(input);
};

const usingHashMethod = (input) => {
  const hash = {};
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const absoluteValue = Math.abs(input[i]);
    if (hash[absoluteValue] !== undefined) {
      !result.includes(absoluteValue) && result.push(absoluteValue);
    } else {
      hash[absoluteValue] = "";
    }
  }
  return result.sort((a, b) => a - b);
};

const usingInBuiltMethod = (input) => {
  const absoluteNumberArray = input.map((elem) => Math.abs(elem));
  const result = [];
  absoluteNumberArray.forEach(
    (elem, index) =>
      absoluteNumberArray.indexOf(elem) !== index &&
      !result.includes(elem) &&
      result.push(elem)
  );

  return result.sort((a, b) => a - b);
};
