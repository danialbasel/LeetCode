/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let sum = "";
    for (let index = 0; index < s.length; index++) {
        const val = s.charCodeAt(index) - 96;
        sum += val;
    }
    for (k; k > 0; k--) {
        let tempSum = 0;
        sum = sum.toString();
        for (let index = 0; index < sum.length; index++) {
            tempSum += Number(sum[index]);
        }
        sum = tempSum;
    }
    return sum;
};
