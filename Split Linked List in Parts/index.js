/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    const splitArray = new Array(k).fill(null);
    const tempNodes = [];
    while (head) {
        tempNodes.push(head);
        head = head.next;
    }
    const spiltSize = Math.floor(tempNodes.length / k);
    const largerSizeCount = tempNodes.length % k;
    let startIndex = 0;
    for (let index = 0; index < splitArray.length; index++) {
        if (startIndex >= tempNodes.length) return splitArray;
        splitArray[index] = tempNodes[startIndex];
        let listSize = spiltSize + ((largerSizeCount >= index + 1) ? 1 : 0);
        tempNodes[startIndex + listSize - 1].next = null;
        startIndex += listSize;
    }
    return splitArray;
};
