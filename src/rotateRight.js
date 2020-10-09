// https://leetcode.com/problems/rotate-list/

const assert = require('assert').strict;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 class ListNode {
     constructor (val, next) {
         this.val = (val===undefined ? 0 : val);
         this.next = (next===undefined ? null : next);
     }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;

    let count = 0;
    let current = head;

    while (current) {
        count++;

        if (current.next) {
            current = current.next;
        } else {
            break;
        }
    }

    if (count === 0) return;

    current.next = head;
    
    let wrappedNumber = k % count;
    
    let i = 0;
    let prev;
    current = head;

    while (i < count - wrappedNumber) {
        prev = current;
        current = current.next;
        i++;
    }

    let start = current;
    prev.next = null;
    
    return start;
};

console.log('DONE');
