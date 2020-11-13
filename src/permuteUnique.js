// https://leetcode.com/problems/permutations-ii/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length <= 1) {
        return [nums];
    }

    let res = {};
    for (let i=0; i<nums.length; i++) {
        let remaining = [...nums.slice(0, i), ...nums.slice(i+1)];
        let perm = permuteUnique(remaining);
        
        for (p of perm) {
            let newPerm = [nums[i], ...p];
            res[newPerm.toString()] = newPerm;
        }

    }

    return Object.values(res);
};

assert.deepStrictEqual(permuteUnique([1]), [[1]]);
assert.deepStrictEqual(permuteUnique([1, 2]), [[1, 2], [2, 1]]);
assert.deepStrictEqual(permuteUnique([1, 2, 3]), [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
assert.deepStrictEqual(permuteUnique([1, 2, 3, 4]), [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]);

assert.deepStrictEqual(permuteUnique([1, 1, 2]), [[1,1,2],[1,2,1],[2,1,1]]);


console.log('Done!')
