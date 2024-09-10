/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const total = rolls.reduce((i = 0, cur) => i + cur);
    let x = mean * (rolls.length + n) - total;
    if (6 * n < x || x < n || x != Math.floor(x)) return [];

    let meanArray = new Array(n).fill(1);
    let remaining = x - meanArray.length;
    let index = 0;
    while (remaining > 0) {
        let amountToAdd = (remaining > 5 ? 5 : remaining);
        meanArray[index] += amountToAdd;
        index++;
        remaining -= amountToAdd;
    }
    return meanArray;
};