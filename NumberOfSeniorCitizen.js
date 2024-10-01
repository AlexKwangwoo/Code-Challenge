/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0;
  details.forEach((each) => {
    if (Number(each[11] + each[12]) > 60) {
      result++;
    }
  });

  return result;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
