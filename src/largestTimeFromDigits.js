// https://leetcode.com/problems/largest-time-for-given-digits/

const assert = require('assert').strict;

var largestTimeFromDigits = function(A) {
    const permutationsOfTwo = (arr) => {
      let permutations = [];

      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
          permutations.push(`${arr[i]}${arr[j]}`);
          permutations.push(`${arr[j]}${arr[i]}`);
        }
      }

      return permutations;
    }
  
    let hoursPermutations = permutationsOfTwo(A).filter(p => p <= '23').sort((a, b) => a < b);
    if (hoursPermutations.length == 0) {
      return '';
    }

    for (let hours of hoursPermutations) {
      let minutesArray = [...A];
      for (let h of hours) {
        minutesArray.splice(minutesArray.findIndex(a => a == h), 1);
      }
  
      let minutesPermutations = permutationsOfTwo(minutesArray).filter(p => p <= '59').sort();
      if (minutesPermutations.length == 0) {
        continue;
      }

      let minutes = minutesPermutations[minutesPermutations.length-1];

      return `${hours}:${minutes}`;
    }

    return '';
};

assert.strictEqual(largestTimeFromDigits([1,2,3,4]), "12:43");
assert.strictEqual(largestTimeFromDigits([2,0,6,6]), "06:26");
assert.strictEqual(largestTimeFromDigits([2,1,2,7]), "21:27");
assert.strictEqual(largestTimeFromDigits([5,5,5,5]), "");

console.log('DONE');
