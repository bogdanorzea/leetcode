// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let maxXor = 0;

    for (let i=0; i < nums.length - 1; i++) {
        for (let j = i; j < nums.length; j++) {
            const xor = nums[i] ^ nums[j];

            if (xor > maxXor) { 
                maxXor = xor;
            }
        }
    }

    return maxXor;
};

assert.strictEqual(findMaximumXOR([0]), 0);
assert.strictEqual(findMaximumXOR([2, 8, 10]), 10);
assert.strictEqual(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]), 127);

console.log('DONE');
