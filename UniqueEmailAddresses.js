/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let result = {};
  let total = 0;

  for (let i = 0; i < emails.length; i++) {
    let temp = emails[i].split("@");
    let name = temp[0].split("+")[0].replaceAll(".", "");
    let domain = temp[1];
    console.log("name", name);
    console.log("domain", domain);
    if (result[domain]) {
      result[domain] = result[domain].add(name);
    } else {
      result[domain] = new Set([name]);
    }
  }
  console.log("result", result);

  for (const each in result) {
    total += result[each].size;
  }

  return total;
};

console.log(
  "final",
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

// Code Sample (Runtime: 56ms)

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails2 = function (emails) {
  let res = new Set();

  for (let i = 0; i < emails.length; i++) {
    let local = emails[i].slice(0, emails[i].indexOf("@"));
    let domain = emails[i].slice(emails[i].indexOf("@"));

    if (local.includes("+")) local = local.slice(0, local.indexOf("+"));

    local = local.replaceAll(".", "");

    res.add(local + domain);
  }

  return res.size;
};
