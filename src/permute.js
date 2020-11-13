// https://leetcode.com/problems/permutations/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) {
        return [nums];
    }

    let res = [];
    for (let i=0; i<nums.length; i++) {
        let remaining = [...nums.slice(0, i), ...nums.slice(i+1)];
        let perm = permute(remaining);
        
        for (p of perm) {
            res.push([nums[i], ...p]);
        }

    }

    return res;
};

assert.deepStrictEqual(permute([1]), [[1]]);
assert.deepStrictEqual(permute([1, 2]), [[1, 2], [2, 1]]);
assert.deepStrictEqual(permute([1, 2, 3]), [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
assert.deepStrictEqual(permute([1, 2, 3, 4]), [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]);

console.log('Done!')
