// https://leetcode.com/problems/remove-duplicate-letters/

const assert = require('assert').strict;

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let chars = {};

    for (let c of s) {
        chars[c] = chars[c] ? chars[c] + 1 : 1;
    }

    let stack = [];
    let charsAdded = {};

    for (let c of s) {
        if (!charsAdded[c]) {
            while (stack.length > 0 && c < stack[stack.length-1] && chars[stack[stack.length-1]] > 0) {
                charsAdded[stack[stack.length-1]] = false;
                stack.pop();
            }

            charsAdded[c] = true;
            chars[c] -= 1;
            stack.push(c);
        } else {
            chars[c] -= 1;
        }
    }

    return stack.join('');
};

assert.strictEqual(removeDuplicateLetters("edebbed"), 'bed');
assert.strictEqual(removeDuplicateLetters(''), '');
assert.strictEqual(removeDuplicateLetters("bbcaac"), 'bac');
assert.strictEqual(removeDuplicateLetters('bcabc'), 'abc');
assert.strictEqual(removeDuplicateLetters('cbacdcbc'), 'acdb');
assert.strictEqual(removeDuplicateLetters('cdadabcc'), 'adbc');

console.log('DONE');
