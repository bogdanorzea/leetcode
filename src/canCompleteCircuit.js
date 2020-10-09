// https://leetcode.com/problems/gas-station/

const assert = require('assert').strict;

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let startStationIndex = cost.indexOf(Math.min(...cost));
    let numberOfStations = gas.length;
    let getWrappedIndex = (i) => (numberOfStations + i) % numberOfStations;

    for (let i = startStationIndex; i < numberOfStations; i++) {
        let currentIndex = i;
        let nextIndex = getWrappedIndex(currentIndex + 1);
        let currentGas = gas[i];
        
        while (nextIndex != i) {
            if (currentGas <= cost[currentIndex]) {
                break;
            }

            currentGas = currentGas - cost[currentIndex] + gas[nextIndex];
            currentIndex = nextIndex;
            nextIndex = getWrappedIndex(currentIndex + 1);
        }

        if (nextIndex == i && currentGas >= cost[currentIndex]) {
            return i;
        }
    }

    return -1;
};

assert.strictEqual(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), 3);
assert.strictEqual(canCompleteCircuit([2,3,4], [3,4,3]), -1);
assert.strictEqual(canCompleteCircuit([4,5,3,1,4], [5,4,3,4,2]), -1);

console.log('DONE');
