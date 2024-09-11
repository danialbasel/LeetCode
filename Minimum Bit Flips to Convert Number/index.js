/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    if (start == goal) return 0;
    let num1 = start.toString(2);
    let num2 = goal.toString(2);
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, "0")
    num2 = num2.padStart(maxLength, "0")
    let minFlips = 0;
    for (let index = 0; index < num1.length; index++)
        if (num1[index] ^ num2[index])
            minFlips++;
    return minFlips;
};
