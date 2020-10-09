// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = '' + x;
    let strLen = str.length;
  
    for (let i=0; i<strLen; i++) {
      if (str[i] !== str[strLen - 1 - i]) {
        return false;
      }
    }
  
    return true;
  };


console.log(isPalindrome(121));
console.log(isPalindrome(11));
console.log(isPalindrome(131));
console.log(isPalindrome(1331));
console.log(isPalindrome(1431));
