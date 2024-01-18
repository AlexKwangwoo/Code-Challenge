/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let a = {};
  for (let i = 0; i < list1.length; i++) {
    a[list1[i]] = { result: false, number: i };
  }

  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in a) {
      a[list2[i]].result = true;
      a[list2[i]].number += i;
    }
  }

  let compare = -1;
  let result = [];
  for (each in a) {
    if (a[each].result && compare < 0) {
      compare = a[each].number;
    }

    if (a[each].result && compare > a[each].number) {
      compare = a[each].number;
      result = [];
    }

    if (a[each].result && a[each].number === compare) {
      result.push(each);
    }
  }

  return result;
};
console.log(findRestaurant(["nfeau", "KFC"], ["KFC"]));
