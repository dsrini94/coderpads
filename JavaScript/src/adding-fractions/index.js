export const addingFractions = (input) => {
  let num1 = input[0],
    den1 = input[1],
    num2 = input[2],
    den2 = input[3];

  let addedNum;

  if (den1 === den2) addedNum = num1 + num2;
  else addedNum = (den2 / den1) * num1 + num2;

  for (let i = 2; i <= den2; i++) {
    if (addedNum === 1 || den2 === 1) break;
    else if (addedNum % i === 0 && den2 % i === 0) {
      addedNum = addedNum / i;
      den2 = den2 / i;
      i = 1;
    }
  }
  return `${addedNum}/${den2}`;
};
