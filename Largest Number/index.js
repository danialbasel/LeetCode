/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let num = nums.map(String).sort((a, b) => (b + a).localeCompare(a + b)).join('');
  if (num == 0) return "0";
  return num;
};
