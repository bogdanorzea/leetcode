// https://leetcode.com/problems/unique-paths-iii/

const assert = require('assert').strict;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const numberOfRows = grid.length;
    const numberOfColumns = grid[0].length;
    let numberOfEmptySpaces = 0;
    let numberOfSolutions = 0;
    let startI, startJ;
    
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            
            if (cell === 0) {
                numberOfEmptySpaces++;
            } else if (cell === 1) {
                startI = i;
                startJ = j;
            }
        }
    }

    const canGoLeft = (i, j) => j > 0;
    const canGoRight = (i, j) => j < numberOfColumns - 1;
    const canGoUp = (i, j) => i > 0;
    const canGoDown = (i, j) => i < numberOfRows - 1;

    const dfs = (i, j, visitedCells) => {
        const wasCellVisited = visitedCells.findIndex(vc => vc[0] === i && vc[1] === j) != -1;
        const cellValue = grid[i][j];

        if (wasCellVisited || cellValue === -1) {
            return;
        }

        if (visitedCells.length - 1 === numberOfEmptySpaces && grid[i][j] === 2) {
            numberOfSolutions++;
            return;
        }

        if (canGoLeft(i, j)) {
            dfs(i, j-1, [...visitedCells, [i, j]]);
        }

        if (canGoRight(i, j)) {
            dfs(i, j+1, [...visitedCells, [i, j]]);
        }

        if (canGoUp(i, j)) {
            dfs(i-1, j, [...visitedCells, [i, j]]);
        }

        if (canGoDown(i, j)) {
            dfs(i+1, j, [...visitedCells, [i, j]]);
        }
    };

    dfs(startI, startJ,[]);


    return numberOfSolutions;
};

assert.strictEqual(uniquePathsIII([[1,0,0,0], [0,0,0,0], [0,0,2,-1]]), 2);
assert.strictEqual(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]), 4);
assert.strictEqual(uniquePathsIII([[0,1],[2,0]]), 0);
assert.strictEqual(uniquePathsIII([[1,0],[-1,2]]), 1);
assert.strictEqual(uniquePathsIII([[1,0,-1],[-1,0,0],[-1,-1,2]]), 1);

console.log('DONE');
