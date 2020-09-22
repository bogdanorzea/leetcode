// https://leetcode.com/problems/house-robber

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let maxSums = [];

    for (let i=0; i<nums.length; i++) {
        let secondLastSum = maxSums[i-2] || 0;
        let lastSum = maxSums[i-1] || 0;

        maxSums.push(Math.max(secondLastSum + nums[i], lastSum));
    }

    return maxSums[maxSums.length-1] || 0;
};

assert.strictEqual(rob([1,2,3,1]), 4);
assert.strictEqual(rob([2, 1, 1, 2]), 4);
assert.strictEqual(rob([2,7,9,3,1]), 12);
assert.strictEqual(rob([]), 0);

console.log('DONE');
