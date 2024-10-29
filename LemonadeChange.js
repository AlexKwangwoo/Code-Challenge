/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let change = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change[5] = change[5] + 1;
    } else {
      if (bills[i] === 10) {
        if (change[5] >= 1) {
          change[10] = change[10] + 1;
          change[5] = change[5] - 1;
        } else {
          return false;
        }
      } else {
        if (change[10] >= 1 && change[5] >= 1) {
          change[10] = change[10] - 1;
          change[5] = change[5] - 1;
        } else if (change[10] === 0 && change[5] >= 3) {
          change[5] = change[5] - 3;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

console.log("lemonade", lemonadeChange([5, 5, 10, 10, 20]));
