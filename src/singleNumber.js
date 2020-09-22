// https://leetcode.com/problems/single-number

const assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const matchedPositions = [];
  
  for (let i=0; i < nums.length - 1; i++) {
      let hasPair = false;

      if (matchedPositions[i]) {
          continue;
      }

      for (let j=i+1; j<nums.length; j++) {
          if (matchedPositions[j]) {
              continue;
          }
          
          if (nums[i] == nums[j]) {
              hasPair = true;
              matchedPositions[i] = true;
              matchedPositions[j] = true;
          }
      }

      if (!hasPair) {
          return nums[i];
      }
  }

  return nums[nums.length - 1];
};

assert.strictEqual(singleNumber([4, 1, 2, 1, 2]), 4);

console.log('DONE');
