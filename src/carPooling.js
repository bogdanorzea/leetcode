// https://leetcode.com/problems/car-pooling/

const assert = require('assert').strict;

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let sortedTrips = trips.sort((a, b) => a[1] - b[1]);
    let intervals = [];

    for (let i=0; i < sortedTrips.length; i++) {
        let currentTrip = sortedTrips[i];
        for (let j=currentTrip[1]; j < currentTrip[2]; j++) {
            intervals[j] = (intervals[j] || 0) + currentTrip[0];

            if (intervals[j] > capacity) {
                return false;
            }
        }
    }

    return true;
};

assert.strictEqual(carPooling([[2,1,5],[3,3,7]], 5), true);
assert.strictEqual(carPooling([[3,3,7], [2,1,5]], 5), true);
assert.strictEqual(carPooling([[2,1,5],[3,3,7]], 4), false);
assert.strictEqual(carPooling([[2,1,5],[4,5,7]], 4), true);

console.log('DONE');
