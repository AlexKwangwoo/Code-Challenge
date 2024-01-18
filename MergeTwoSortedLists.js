/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergedList = list1;
  for (let i = 0; i < list2.length; i++) {
    mergedList.push(list2[i]);
  }

  if (mergedList.length > 0) {
    if (mergedList?.length > 1) {
      for (let i = 0; i < mergedList.length - 1; i++) {
        for (let j = i + 1; j < mergedList.length; j++) {
          if (mergedList[i] >= mergedList[j]) {
            let temp = mergedList[i];
            mergedList[i] = mergedList[j];
            mergedList[j] = temp;
          }
        }
        // console.log("mergedList", mergedList);
      }
    } else {
      return mergedList;
    }
  } else {
    return new Array();
  }
  return mergedList;
};

console.log("result", mergeTwoLists([1, 2, 4], [1, 3, 4]));
