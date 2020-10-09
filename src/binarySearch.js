// https://leetcode.com/problems/binary-search/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let min = 0;
    let max = nums.length;
    let pivot = Math.ceil(max / 2);

    while (min <= max) {
        if (nums[pivot] === target) {
            return pivot;
        } else if (nums[pivot] < target) {
            min = pivot + 1;
        } else {
            max = pivot - 1;
        }

        pivot = Math.ceil((min+max) / 2);
    }

    return -1;
};


assert.strictEqual(search([1,2,3,4,5,6,7,8,9], 71), -1);
assert.strictEqual(search([1,2,3,4,5,6,7,8,9], 7), 6);
assert.strictEqual(search([1,2,3,5,6,7,8,9], 4), -1);
assert.strictEqual(search([1,2,3,5,6,7,8,9], 1), 0);
assert.strictEqual(search([1,2,3,5,6,7,8,9], 9), 7);
assert.strictEqual(search([], 9), -1);

console.log('DONE');
