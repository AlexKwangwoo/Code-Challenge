/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let dif = prices[j] - prices[i];
        if (max < dif) {
          max = dif;
        }
      }
    }
  }

  return max;
};

// O(n) 으로 풀기
var maxProfit2 = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
      if (max_profit === 9) {
        console.log("left", left);
        console.log("right", right);
      }
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

console.log("maxProfit", maxProfit([10, 2, 8, 3, 11, 1, 9]));

console.log("maxProfit", maxProfit2([10, 2, 8, 3, 11, 1, 9]));
// 10, 2, 8, 1, 11, 1, 9;
