// https://leetcode.com/problems/robot-bounded-in-circle/

const assert = require('assert').strict;

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // 0-North, 1-East, 2-South, 3-West
    const directions = [0];
    const setFacingDirection = (direction) => {
        let oldDirection = directions[directions.length - 1];
        let newDirection;

        switch (direction) {
            case 'R':
                newDirection = (oldDirection + 1) % 4;
                break;
            case 'L':
                newDirection = (4 + oldDirection - 1) % 4;
                break;
        }

        directions.push(newDirection);
    };

    const positions = [[0,0]];
    const goStraight = () => {
        let direction = directions[directions.length - 1];
        let oldPosition = positions[positions.length - 1];
        let newPosition;

        switch (direction) {
            case 0:
                newPosition = [oldPosition[0], oldPosition[1] + 1];
                break;
            case 1:
                newPosition = [oldPosition[0] + 1, oldPosition[1]];
                break;
            case 2:
                newPosition = [oldPosition[0], oldPosition[1] - 1];
                break;
            case 3:
                newPosition = [oldPosition[0] - 1, oldPosition[1]];
                break;
        }

        positions.push(newPosition);
    };

    for (let instruction of instructions) {
        if (instruction === 'G') {
            goStraight();
        } else {
            setFacingDirection(instruction);
        }
    }

    let lastDirection = directions[directions.length - 1];
    let lastPosition = positions[positions.length - 1];

    if (lastDirection != 0 || (lastPosition[0] === 0 && lastPosition[1] === 0)) {
        return true;
    }

    return false;
};


assert.strictEqual(isRobotBounded("GGLLGG"), true);
assert.strictEqual(isRobotBounded("GG"), false);
assert.strictEqual(isRobotBounded("GL"), true);
assert.strictEqual(isRobotBounded(""), true);
assert.strictEqual(isRobotBounded("GLRLLGLL"), true);

console.log('DONE');
