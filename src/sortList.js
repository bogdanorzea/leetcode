// https://leetcode.com/problems/sort-list/

const assert = require('assert').strict;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    if (head.val > head.next.val) {
        let temp = head.val;
        head.val = head.next.val;
        head.next.val = temp;
    }

    sortList(head.next);

    if (head.val > head.next.val) {
        sortList(head);
    }

    return head;
};


// assert.strictEqual(sortList(new ListNode(2, new ListNode(1))), true);
assert.strictEqual(sortList(new ListNode(3, new ListNode(2, new ListNode(1)))), true);

console.log('DONE');
