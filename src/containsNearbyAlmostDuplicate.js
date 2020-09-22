// https://leetcode.com/problems/contains-duplicate-iii/

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i=0; i < nums.length - 1; i++) {
      for (let j=i+1; j < i + 1 + k; j++) {
          let difference = Math.abs(nums[i] - nums[j]);
          if (difference <= t) {
              return true;
          }
      }
  }
  
  return false;
};

assert.strictEqual(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0), true);

console.log('DONE');
