// https://leetcode.com/problems/combination-sum-iii

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number}
 */
var combinationSum3 = function(k, n) {
    let solutions = [];

    /**
     * @param {number[]} items 
     */
    const findSum = (items) => {
        let currentSum = items.reduce((prev, curr) => prev + curr, 0);

        if (items.length == k && currentSum == n) {
            solutions.push(items);
        } else if (items.length < k && currentSum < n) {
            let biggestItem = items.slice(-1)[0] || 0;

            for (let i = biggestItem+1; i <= 9; i++) {
                findSum([...items, i]);
            }
        }
    };

    findSum([]);

    return solutions;
};

assert.deepStrictEqual(combinationSum3(3, 7), [[1,2,4]]);
assert.deepStrictEqual(combinationSum3(3, 9), [[1,2,6],[1,3,5],[2,3,4]]);
assert.deepStrictEqual(combinationSum3(9, 45), [[1,2,3,4,5,6,7,8,9]]);
assert.deepStrictEqual(combinationSum3(3, 2), []);
assert.deepStrictEqual(combinationSum3(4, 1), []);

console.log('DONE');
