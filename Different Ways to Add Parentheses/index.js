/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let results = [];
    for (let i = 0; i < expression.length; i++) {
        let operand = expression[i];
        if (['*', '+', '-'].includes(operand)) {
            let right = diffWaysToCompute(expression.slice(0, i));
            let left = diffWaysToCompute(expression.slice(i + 1));
            for (let x of right) {
                for (let y of left) {
                    if (operand === '*') results.push(x * y);
                    else if (operand === '+') results.push(x + y);
                    else if (operand === '-') results.push(x - y);
                }
            }
        }
    }
    if (results.length === 0) results.push(Number(expression));
    return results;
};
