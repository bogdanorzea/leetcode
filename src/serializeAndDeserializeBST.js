// https://leetcode.com/problems/serialize-and-deserialize-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return BSTToArray(root).map(n => '' + n).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '') return null;

    let arr = data.split(',').map(n => n === 'null'? null : n);
    return arrayToBST(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

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

assert.deepStrictEqual(BSTToArray(arrayToBST([])), []);
assert.deepStrictEqual(BSTToArray(arrayToBST([0])), [0]);
assert.deepStrictEqual(BSTToArray(arrayToBST([2, 1])), [2, 1]);
assert.deepStrictEqual(BSTToArray(arrayToBST([2, null, 1])), [2, null, 1]);
assert.deepStrictEqual(BSTToArray(arrayToBST([4, 2, 7, 1, 3, 5, 8])), [4, 2, 7, 1, 3, 5, 8]);
assert.deepStrictEqual(BSTToArray(arrayToBST([4, 2, 7, 1, 3])), [4, 2, 7, 1, 3]);
assert.deepStrictEqual(BSTToArray(arrayToBST([4, null, 7, 5, 8])), [4, null, 7, 5, 8]);

assert.deepStrictEqual(BSTToArray(arrayToBST([24, 1, 35, 0, 2, 30, 36, null, null, null, 4, 29, 32])), [24, 1, 35, 0, 2, 30, 36, null, null, null, 4, 29, 32]);

let arr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23];
let res = BSTToArray(arrayToBST(arr));
assert.deepStrictEqual(res, arr);

console.log('DONE');

