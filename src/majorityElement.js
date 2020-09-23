// https://leetcode.com/problems/majority-element-ii/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const elements = [];
    const response = new Set();
    const limitToBeMajority = Math.floor(nums.length/3);

    for (let i = 0; i < nums.length; i++) {
        elements[nums[i]] = (elements[nums[i]] || 0) + 1;

        if (elements[nums[i]] > limitToBeMajority) {
            response.add(nums[i]);
        }
    }

    return Array.from(response).sort((a, b) => a - b);
};

assert.deepStrictEqual(majorityElement([3,2,3]), [3]);
assert.deepStrictEqual(majorityElement([1,1,1,3,3,2,2,2]), [1, 2]);
assert.deepStrictEqual(majorityElement([2,1,1,3,3,1,2,2]), [1, 2]);

console.log('DONE');
