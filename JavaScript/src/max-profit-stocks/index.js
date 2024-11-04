export const maxProfitStocks = (input) => {
  //spolution with o(n^2)
  return soltionWith2ForLoop(input);

  //efficient solution
  return efficientSolution(input);
};

const soltionWith2ForLoop = (input) => {
  let maxProfit = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const currentProfit = input[j] - input[i];
      if (currentProfit > maxProfit) maxProfit = currentProfit;
    }
  }
  return maxProfit;
};

const efficientSolution = () => {
  let maxProfit = 0;
  let currentSellPrice = input[0];
  for (let i = 1; i < input.length; i++) {
    const currentProfit = input[i] - currentSellPrice;
    maxProfit = Math.max(currentProfit, maxProfit);

    if (input[i] < currentSellPrice) currentSellPrice = input[i];
  }

  return maxProfit;
};
