// Get the max profit from a series of prices across time
const maxProfit = function(prices) {
  // Stop recursion if array is too divided
  if (prices.length<=1)
    return -1;

  // Split array into two
  const head = prices.slice(0, parseInt(prices.length / 2));
  const tail = prices.slice(parseInt(prices.length / 2));

  // Get the max of the difference between second half of array and first half,
  // but also recursively call function on just the first half and second half
  return Math.max((Math.max(...tail) - Math.min(...head)), maxProfit(head), maxProfit(tail));
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([4,3,2,1]));