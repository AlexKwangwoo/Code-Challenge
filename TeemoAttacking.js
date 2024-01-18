/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  var result = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (i === timeSeries.length - 1) {
      return (result += duration);
    }
    if (timeSeries[i + 1] - timeSeries[i] > duration) {
      result += duration;
    } else {
      result += timeSeries[i + 1] - timeSeries[i];
    }
  }

  return result;
};
