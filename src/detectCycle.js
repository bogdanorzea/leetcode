// https://leetcode.com/problems/linked-list-cycle-ii/

const assert = require('assert').strict;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            while (head != fast) {
                head = head.next;
                fast = fast.next;
            }

            return head;
        }
    }

    return null;
};


const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
node2.next = node1;

assert.strictEqual(detectCycle(node1), true);

console.log('DONE');
