// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

const assert = require('assert').strict;

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let sortedPoints = points.sort((a, b) => a[1] - b[1]);
    let arrowsNeeded = 0;

    for (let i = 0; i < sortedPoints.length; i++) {
        const currentIntervalEnd = sortedPoints[i][1];
         while (i+1 < sortedPoints.length && sortedPoints[i+1][0] <= currentIntervalEnd) {
             i++;
         }

         arrowsNeeded++;
    }

    return arrowsNeeded;
};

assert.strictEqual(findMinArrowShots([]), 0);
assert.strictEqual(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]), 2);
assert.strictEqual(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]), 4);
assert.strictEqual(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]), 2);
assert.strictEqual(findMinArrowShots([[1,2]]), 1);
assert.strictEqual(findMinArrowShots([[2,3],[2,3]]), 1);

console.log('DONE');
