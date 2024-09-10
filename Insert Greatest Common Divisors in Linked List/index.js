/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    let cur = head;
    let next = head.next;
    while (next) {
        let greatestCommonDivisor = findGreatestCommonDivisor(cur.val, next.val);
        let newNode = new ListNode(greatestCommonDivisor, next);
        cur.next = newNode;
        cur = next;
        next = next.next;
    }
    return head;
};

var findGreatestCommonDivisor = (num1, num2) => {
    if (num1 == num2) return num1;
    const primeNumbers = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]);
    const num1IsPrime = primeNumbers.has(num1);
    const num2IsPrime = primeNumbers.has(num2);
    if (num1IsPrime && num2IsPrime) return 1;
    if (num1IsPrime) {
        if (num1 > num2) return 1;
        if (num1 < num2 && Number.isInteger(num2 / num1)) return num1;
        return 1;
    }
    if (num2IsPrime) {
        if (num2 > num1) return 1;
        if (num2 < num1 && Number.isInteger(num1 / num2)) return num2;
        return 1;
    }
    const num1PossibleFactors = Array.from(primeNumbers).filter(item => item <= num1 / 2);
    const num1Factors = {};
    num1PossibleFactors.forEach(item => num1Factors[item] = 0);
    let tempNum1 = num1;
    while (tempNum1 != 1) {
        if (Number.isInteger(tempNum1 / num1PossibleFactors[num1PossibleFactors.length - 1])) {
            num1Factors[num1PossibleFactors[num1PossibleFactors.length - 1]] += 1;
            tempNum1 /= num1PossibleFactors[num1PossibleFactors.length - 1];
        } else {
            num1PossibleFactors.splice(num1PossibleFactors.length - 1, 1);
        }
    }
    const num2PossibleFactors = Array.from(primeNumbers).filter(item => item <= num2 / 2);
    const num2Factors = {};
    num2PossibleFactors.forEach(item => num2Factors[item] = 0);
    let tempNum2 = num2;
    while (tempNum2 != 1) {
        if (Number.isInteger(tempNum2 / num2PossibleFactors[num2PossibleFactors.length - 1])) {
            num2Factors[num2PossibleFactors[num2PossibleFactors.length - 1]] += 1;
            tempNum2 /= num2PossibleFactors[num2PossibleFactors.length - 1];
        } else {
            num2PossibleFactors.splice(num2PossibleFactors.length - 1, 1);
        }
    }
    let num1F = Object.entries(num1Factors).filter(item => item[1] > 0);
    let num2F = Object.entries(num2Factors).filter(item => item[1] > 0);
    let greatestCommonDivisor = 1;
    num1F.forEach(item => {
        let common = num2F.find(i => i[0] == item[0])
        if (common) {
            greatestCommonDivisor *= Math.pow(item[0], Math.min(item[1], common[1]))
        }
    })
    return greatestCommonDivisor;
}
