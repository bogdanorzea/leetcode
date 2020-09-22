// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

const assert = require('assert').strict;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    let minInterval;
    let maxInterval = 0;

    for (let i = 0; i < prices.length; i++) {
        if (minInterval == undefined || prices[i] < minInterval) {
            max = Math.max(max, maxInterval - (minInterval || 0));

            minInterval = prices[i];
            maxInterval = prices[i];
        }

        if (prices[i] > maxInterval) {
            maxInterval = prices[i];
        }
    }

    return Math.max(max, maxInterval - (minInterval || 0));
};

assert.strictEqual(maxProfit([]), 0);
assert.strictEqual(maxProfit([2, 4, 1]), 2);
assert.strictEqual(maxProfit([1, 8]), 7);
assert.strictEqual(maxProfit([8, 1]), 0);
assert.strictEqual(maxProfit([7, 1, 6]), 5);
assert.strictEqual(maxProfit([7, 1, 9, 4, 8, 6]), 8);
assert.strictEqual(maxProfit([7,6,4,3,1]), 0);
assert.strictEqual(maxProfit([2,1,2,1,0,1,2]), 2);

console.log('DONE');
