// https://leetcode.com/problems/compare-version-numbers

const assert = require('assert').strict;

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const strToInt = i => parseInt(i);
    const arr1 = version1.split(".").map(strToInt);
    const arr2 = version2.split(".").map(strToInt);

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        const seg1 = arr1[i] || 0;
        const seg2 = arr2[i] || 0;

        if (seg1 < seg2) {
            return -1;
        } else if (seg1 > seg2) {
            return 1;
        }
    }

    return 0;
};

assert.strictEqual(compareVersion("0.0", "0.1"), -1);
assert.strictEqual(compareVersion("1.01", "1.001"), 0);
assert.strictEqual(compareVersion("1.0.0", "1.0.0"), 0);
assert.strictEqual(compareVersion("1.0.1", "1.0.0"), 1);
assert.strictEqual(compareVersion("1.0.1", "1.0"), 1);
assert.strictEqual(compareVersion("7.5.2.4", "7.5.3"), -1);

console.log('DONE');
