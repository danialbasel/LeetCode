/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let loopN = true;
    let nIndex = 0;
    let mIndex = 0;
    let finialArray = new Array(m).fill(null).map(item => new Array(n).fill(-1));
    let cur = head;
    let isIncrement = true;
    let borderNmax = n - 1;
    let borderMmax = m - 1;
    let borderNmin = 0;
    let borderMmin = 1;
    while (cur != null) {
        if (loopN) {
            if (isIncrement) {
                for (nIndex; nIndex <= borderNmax; nIndex++) {
                    finialArray[mIndex][nIndex] = cur.val;
                    cur = cur.next;
                    if (cur == null) return finialArray;
                }
                loopN = false;
                borderNmax--;
                nIndex--;
                mIndex++;
            } else {
                for (nIndex; nIndex >= borderNmin; nIndex--) {
                    finialArray[mIndex][nIndex] = cur.val;
                    cur = cur.next;
                    if (cur == null) return finialArray;
                }
                loopN = false;
                borderNmin++;
                nIndex++;
                mIndex--;
            }
        } else {
            if (isIncrement) {
                for (mIndex; mIndex <= borderMmax; mIndex++) {
                    finialArray[mIndex][nIndex] = cur.val;
                    cur = cur.next;
                    if (cur == null) return finialArray;
                }
                loopN = true;
                borderMmax--;
                mIndex--;
                nIndex--;
                isIncrement= false;
            } else {
                for (mIndex; mIndex >= borderMmin; mIndex--) {
                    finialArray[mIndex][nIndex] = cur.val;
                    cur = cur.next;
                    if (cur == null) return finialArray;
                }
                loopN = true;
                borderMmin++;
                mIndex++;
                nIndex++;
                isIncrement = true;
            }
        }
    }
    return finialArray;
};
