// https://leetcode.com/problems/sequential-digits

const assert = require('assert').strict;

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const numberOfDigits = (num) => {
        let digits = 1;
        let tempNum = num;

        while (tempNum >= 10) {
            tempNum /= 10;
            digits++;
        }

        return digits;
    };

    const results = [];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const lowDigits = numberOfDigits(low);
    const highDigits = numberOfDigits(high);

    for (let i = lowDigits; i <= highDigits; i++) {
        for (let j = 1; j <= numbers.length - i; j++) {
            let n = ~~numbers.slice(j, j+i).join('');
            if (low<= n && n <= high) {
                results.push(n);
            }
        }
    }

    return results;
};

assert.deepStrictEqual(sequentialDigits(1, 9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(sequentialDigits(10, 90), [12, 23, 34, 45, 56, 67, 78, 89]);
assert.deepStrictEqual(sequentialDigits(58, 155), [67, 78, 89, 123]);
assert.deepStrictEqual(sequentialDigits(100, 300), [123, 234]);
assert.deepStrictEqual(sequentialDigits(100, 3000), [123, 234, 345, 456, 567, 678, 789, 1234, 2345]);
assert.deepStrictEqual(sequentialDigits(1000, 13000), [1234, 2345, 3456, 4567, 5678, 6789, 12345]);

console.log('DONE');
