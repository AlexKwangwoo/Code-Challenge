/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let result = 0;
  console.log("");

  if (flowerbed[0] === 0 && flowerbed.length === 1) {
    result++;
  }

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    result++;
    flowerbed[0] = 1;
  }

  if (
    flowerbed[flowerbed.length - 1] === 0 &&
    flowerbed[flowerbed.length - 2] === 0
  ) {
    result++;
    flowerbed[flowerbed.length - 1] = 1;
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      result++;
      flowerbed[i] = 1;
    }
  }
  console.log("result", result);
  return result >= n;
};
