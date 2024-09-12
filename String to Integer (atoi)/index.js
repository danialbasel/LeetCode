/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let charCodeZero = "0".charCodeAt(0);
  let charCodeNine = "9".charCodeAt(0);
  let isDigitCode = (n) => (n >= charCodeZero && n <= charCodeNine);

  s = s.trimStart();
  let maxNumber = BigInt(2147483647);
  let minNumber = BigInt(-2147483648);
  let number = '';
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (!isDigitCode(char.charCodeAt())) {
      if (index === 0 && (char === '+' || char === '-')) {
        number += char;
        continue;
      }
      break;
    }
    number += char;
  }
  if (number === '' || number === '+' || number === '-') return 0;
  let bigIntNumber = BigInt(number);
  if (bigIntNumber > maxNumber) return Number(maxNumber);
  if (bigIntNumber < minNumber) return Number(minNumber);
  return Number(bigIntNumber);
};
