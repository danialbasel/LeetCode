/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) return [];
    let twoD = [];
    for (let i = 0; i < m; i++) {
        twoD.push(original.slice(i * n, (i + 1) * n))
    }
    return twoD;
};
