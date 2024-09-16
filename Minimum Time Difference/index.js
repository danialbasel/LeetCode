/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let timePointsInMinutes = new Set();
  for (let index = 0; index < timePoints.length; index++) {
    const element = timePoints[index];
    let minutes = element.split(':')[0] * 60 + Number(element.split(':')[1]);
    if (timePointsInMinutes.has(minutes))
      return 0;
    else
      timePointsInMinutes.add(minutes);
  }
  let sortedTimePoints = Array.from(timePointsInMinutes).sort((a, b) => a - b);
  let dif = sortedTimePoints[sortedTimePoints.length - 1] - sortedTimePoints[0];
  let min = (dif > 12 * 60 ? 24 * 60 - dif : dif);
  for (let index = 0; index < sortedTimePoints.length; index++) {
    let dif = sortedTimePoints[index + 1] - sortedTimePoints[index];
    let val = (dif > 12 * 60 ? 24 * 60 - dif : dif);
    if (val < min) min = val;
  }
  return min;
};
