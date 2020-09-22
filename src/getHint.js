// https://leetcode.com/problems/bulls-and-cows/

const assert = require('assert').strict;

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    let usedSecretPosition = [];

    for (let i=0; i<guess.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
            usedSecretPosition[i] = true;
        }
    }

    let usedGuestPosition = [...usedSecretPosition];

    for (let i=0; i<guess.length; i++) {
        if (!usedGuestPosition[i]) {
            for (let j=0; j<secret.length; j++) {
                if (!usedSecretPosition[j] && guess[i] == secret[j]) {
                    cows++;
                    usedSecretPosition[j] = true;
                    break;
                }
            }
        }
    }

    return `${bulls}A${cows}B`;
};

assert.strictEqual(getHint("1807", "7810"), "1A3B");
assert.strictEqual(getHint("1123", "0111"), "1A1B");
assert.strictEqual(getHint("1123", "5678"), "0A0B");
assert.strictEqual(getHint("1122", "1222"), "3A0B");
assert.strictEqual(getHint("1122", "0001"), "0A1B");

console.log('DONE');
