// https://leetcode.com/problems/insert-interval

const assert = require('assert').strict;

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const responseIntervals = [...intervals];
    let wasIntervalInserted = false;

    if (responseIntervals.length == 0) {
        return [newInterval];
    }

    let i = 0;
    while (i<responseIntervals.length) {
        const currentInterval = intervals[i];

        if (newInterval[0] <=currentInterval[0]) {
            let start = newInterval[0];

            if (newInterval[1] < currentInterval[0]) {
                responseIntervals.splice(i, 0, [newInterval[0], newInterval[1]]);
                wasIntervalInserted = true;
                break;
            } else if (newInterval[1] == currentInterval[0]) {
                responseIntervals.splice(i, 1, [newInterval[0], currentInterval[1]]);
                wasIntervalInserted = true;
                break;
            } else if (newInterval[1] <= currentInterval[1]) {
                responseIntervals.splice(i, 1, [newInterval[0], currentInterval[1]]);
                wasIntervalInserted = true;
                break;
            } else {
                let end;
                let intervalsToReplace = 1;

                let j = i;
                while (j < responseIntervals.length-1 && !end) {
                    const nextInterval = intervals[j+1];

                    if (newInterval[1] < nextInterval[0]) {
                        end = newInterval[1];
                    } else if (nextInterval[0] <= newInterval[1] && newInterval[1] <= nextInterval[1]) {
                        intervalsToReplace++;
                        end = nextInterval[1];
                    } else {
                        intervalsToReplace++;
                        j++;
                    }
                }

                if (!end) {
                    end = newInterval[1];
                }

                responseIntervals.splice(i, intervalsToReplace, [start, end]);
                wasIntervalInserted = true;
                break;
            }
        } else if (currentInterval[0] <= newInterval[0] && newInterval[0] <= currentInterval[1]) {
            let start = currentInterval[0];
            
            if (newInterval[1] <= currentInterval[1]) {
                wasIntervalInserted = true;
                break;
            } else {
                let end;
                let intervalsToReplace = 1;

                let j = i;
                while (j < responseIntervals.length-1 && !end) {
                    const nextInterval = intervals[j+1];

                    if (newInterval[1] < nextInterval[0]) {
                        end = newInterval[1];
                    } else if (nextInterval[0] <= newInterval[1] && newInterval[1] <= nextInterval[1]) {
                        intervalsToReplace++;
                        end = nextInterval[1];
                    } else {
                        intervalsToReplace++;
                        j++;
                    }
                }

                if (!end) {
                    end = newInterval[1];
                }

                responseIntervals.splice(i, intervalsToReplace, [start, end]);
                wasIntervalInserted = true;
                break;
            }
        } else {
            i++;
        }
    }

    if (!wasIntervalInserted) {
        responseIntervals.push(newInterval);
    }

    return responseIntervals;
};

assert.deepStrictEqual(insert([[1,5]], [0,1]), [[0,5]]);

assert.deepStrictEqual(insert([[1,5]], [2,7]), [[1,7]]);
assert.deepStrictEqual(insert([[1,5]], [6,8]), [[1,5],[6,8]]);

assert.deepStrictEqual(insert([[2,3],[6,9]], [0,1]), [[0,1],[2,3],[6,9]]);
assert.deepStrictEqual(insert([[1,3],[6,9]], [0,2]), [[0,3],[6,9]]);
assert.deepStrictEqual(insert([[1,3],[6,9]], [1,2]), [[1,3],[6,9]]);
assert.deepStrictEqual(insert([[1,3],[6,9]], [1,4]), [[1,4],[6,9]]);
assert.deepStrictEqual(insert([[1,3],[6,9]], [1,6]), [[1,9]]);

assert.deepStrictEqual(insert([[1,3],[6,9]], [2,5]), [[1,5],[6,9]]);
assert.deepStrictEqual(insert([[1,5], [6, 6]], [2, 2]), [[1,5], [6, 6]]);
assert.deepStrictEqual(insert([[1,5], [6, 6]], [0, 0]), [[0,0], [1,5], [6, 6]]);

assert.deepStrictEqual(insert([[1,1], [3, 3]], [2, 2]), [[1,1], [2,2], [3, 3]]);
assert.deepStrictEqual(insert([[1,5], [8, 16]], [6, 6]), [[1,5], [6, 6], [8, 16]]);
assert.deepStrictEqual(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]), [[1,2],[3,10],[12,16]]);
assert.deepStrictEqual(insert([[1,5],[10,11],[15,2147483647]], [5,7]), [[1,7],[10,11],[15,2147483647]]);

console.log('DONE');
