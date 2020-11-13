// https://leetcode.com/problems/house-robber

const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 2) {
        return nums[0] || 0;
    }

    let rob = (arr, startIndex, endIndex) => {
        let prevTwo = 0;
        let prevOne = 0;
        let max = 0;

        for (let i=startIndex; i < endIndex; i++) {
            max = Math.max(arr[i] + prevTwo, prevOne);
            prevTwo = prevOne;
            prevOne = max;
        }

        return max;
    };

    return Math.max(rob(nums, 0, nums.length - 1), rob(nums, 1, nums.length));
};

assert.strictEqual(rob([2,1,1,2]), 3);
assert.strictEqual(rob([2,7,9,3,1]), 11);
assert.strictEqual(rob([1]), 1);
assert.strictEqual(rob([1,2]), 2);
assert.strictEqual(rob([1,2,3]), 3);
assert.strictEqual(rob([1,2,3,1]), 4);
assert.strictEqual(rob([]), 0);

console.log('DONE');
