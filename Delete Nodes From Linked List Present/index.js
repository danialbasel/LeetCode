/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    let numsSet = new Set(nums);
    const creatList = head => {
        if (head == null) return null; if (numsSet.has(head.val)) return creatList(head.next); return new ListNode(head.val, creatList(head.next));
    }
    return creatList(head);
};
