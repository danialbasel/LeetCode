/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed);
  let count = 0;
  for (const word of words) {
    let isAllowed = true
    for (const char of word) {
      if (!allowedSet.has(char)) {
        isAllowed = false;
        break;
      }
    }
    if (isAllowed) count++;
  }
  return count;
};
