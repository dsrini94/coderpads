export const mostCommonWord = (input) => {
  const convertedInputArray = input.replace(/[^a-zA-Z ]/g, "").split(" ");
  const charCount = {};
  let maxCountWord = "";
  let maxCount = 0;
  for (let i = 0; i < convertedInputArray.length; i++) {
    if (charCount[convertedInputArray[i].toLowerCase()])
      charCount[convertedInputArray[i].toLowerCase()] += 1;
    else charCount[convertedInputArray[i].toLowerCase()] = 1;

    if (charCount[convertedInputArray[i].toLowerCase()] > maxCount) {
      maxCount = charCount[convertedInputArray[i].toLowerCase()];
      maxCountWord = convertedInputArray[i].toLowerCase();
    }
  }

  return maxCountWord;
};
