// https://leetcode.com/problems/word-pattern

const assert = require('assert').strict;

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let bijection = {};

    const isBijection = (first, second) => {
        let isInjection = bijection[first] == second;
        let isSurjection = Object.keys(bijection).filter(key => bijection[key] === second).length == 1;

        return isInjection && isSurjection;
    };

    let split = s.split(' ');

    if (pattern.length != split.length) {
        return false;
    }
    

    for (let i = 0; i < pattern.length; i++) {
        if (!bijection[pattern[i]]) {
            bijection[pattern[i]] = split[i];
        }

        if (!isBijection(pattern[i], split[i] )) {
            return false;
        }
    }
    
    return true;
};

assert(wordPattern("abba", "dog cat cat dog"));
assert(wordPattern("abcd", "dog cat cow bull"));
assert(!wordPattern("abcd", "dog cat cow dog"));

console.log('DONE');
