export const maxProfitStocks = (input) => {
  let maxProfit = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const currentProfit = input[j] - input[i];
      if (currentProfit > maxProfit) maxProfit = currentProfit;
    }
  }
  return maxProfit;
};
