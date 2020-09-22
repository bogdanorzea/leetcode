// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers

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
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    var childrenSumWithMemo = function(root, memo) {
        if (!root) {
            return 0;
        }
    
        const sum = (memo << 1) + root.val;
    
        if (!root.left && !root.right) {
            return sum;
        }
    
        return childrenSumWithMemo(root.left, sum) + childrenSumWithMemo(root.right, sum);
    };

    return childrenSumWithMemo(root, 0);
};

const root1 = new TreeNode(1, undefined, undefined);
assert.equal(sumRootToLeaf(root1), 1);

const root2 = new TreeNode(1, new TreeNode(1, undefined, undefined), new TreeNode(0, undefined, undefined));
assert.equal(sumRootToLeaf(root2), 3 + 2);

const root3 = new TreeNode(1, 
    new TreeNode(0,
        new TreeNode(0, undefined, undefined),
        new TreeNode(1, undefined, undefined)
    ),
    new TreeNode(1,
        new TreeNode(0, undefined, undefined),
        new TreeNode(1, undefined, undefined)
    )
);
assert.equal(sumRootToLeaf(root3), 4 + 5 + 6 + 7);

const root4 = new TreeNode(1, new TreeNode(1, undefined, undefined), undefined);
assert.equal(sumRootToLeaf(root4), 3);

assert.equal(sumRootToLeaf(undefined), 0);

console.log('DONE');
