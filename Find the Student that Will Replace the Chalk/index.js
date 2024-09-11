/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    let total = chalk.reduce((i = 0, curr) => i += curr);
    let remaining = k % total;
    if (remaining == 0) return 0;
    let index = 0;
    while (true) {
        if (remaining < chalk[index]) return index;
        remaining -= chalk[index];
        index++;
    }
};
