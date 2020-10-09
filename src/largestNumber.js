// https://leetcode.com/problems/largest-number/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sortedNumbers = nums.sort((a, b) => {
        const ab = "" + a + b;
        const ba = "" + b + a;

        return ba.localeCompare(ab);
    });

    while(sortedNumbers[0] == 0 && sortedNumbers.length > 1) {
        sortedNumbers.shift();
    }

    return sortedNumbers.join('');
};

assert.strictEqual(largestNumber([0, 0]), "0");
assert.strictEqual(largestNumber([121,12]), "12121");
assert.strictEqual(largestNumber([10, 2]), "210");
assert.strictEqual(largestNumber([3, 30, 34, 5, 9]), "9534330");
assert.strictEqual(largestNumber([3, 310, 34, 5, 9]), "95343310");
assert.strictEqual(largestNumber([38, 310, 3]), "383310");
assert.strictEqual(largestNumber([3800000001, 310, 3]), "38000000013310");

console.log('DONE');
