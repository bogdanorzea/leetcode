// https://leetcode.com/problems/rotate-list/

const assert = require('assert').strict;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};

/**
 * 
 * @param {[number]} arr
 */
const arrayToBST = (arr) => {
    let root = arr[0] != null ? new TreeNode(arr[0]) : null;
    let parents = [root];

    for (let i = 1; i < arr.length; i += 2) {
        let current = parents.shift();

        let leftNode = arr[i] != null ? new TreeNode(arr[i]) : null;
        if (leftNode) {
            current.left = leftNode;
            parents.push(leftNode);
        }

        if ( i < arr.length - 1) {
            let rightNode = arr[i + 1] != null ? new TreeNode(arr[i + 1]) : null;

            if (rightNode) {
                current.right = rightNode;
                parents.push(rightNode);
            }
        }
    }

    return root;
};

/**
 * 
 * @param {TreeNode} root
 */
const BSTToArray = (root) => {
    let arr = [];
    let currentNodes = [root];

    while (currentNodes.length > 0) {
        let currentNode = currentNodes.shift();

        if (currentNode != null) {
            arr.push(currentNode.val);
            currentNodes.push(currentNode.left);
            currentNodes.push(currentNode.right);
        } else {
            arr.push(null);
        }
    }

    while (arr.length > 0 && arr[arr.length-1] == null) {
        arr.pop();
    }

    return arr;
};


assert.deepStrictEqual(BSTToArray(insertIntoBST(arrayToBST([]), 5)), [5]);
assert.deepStrictEqual(BSTToArray(insertIntoBST(arrayToBST([7]), 5)), [7, 5]);
assert.deepStrictEqual(BSTToArray(insertIntoBST(arrayToBST([4,2,7]), 5)), [4, 2, 7, null, null, 5]);
assert.deepStrictEqual(BSTToArray(insertIntoBST(arrayToBST([4,1, 5, null, 3]), 2)), [4,1,5,null,3,null,null,2]);
assert.deepStrictEqual(BSTToArray(insertIntoBST(arrayToBST([40,20,60,10,30,50,70]), 25)), [40,20,60,10,30,50,70,null,null,25]);

console.log('DONE');

