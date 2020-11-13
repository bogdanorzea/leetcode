//https://leetcode.com/problems/buddy-strings/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length != B.length) {
        return false;
    }

    let res = [];
    let similarNumberOfChars = [];
    
    for (let i = 0; i < A.length; i++) {
        let aChar = A.charCodeAt(i);
        let bChar = B.charCodeAt(i);
        let bitwise = aChar - bChar;

        if (bitwise === 0) {
            similarNumberOfChars[aChar - 97] = (similarNumberOfChars[aChar - 97] || 0) + 1;
        } else {
            res.push([aChar, bChar]);
            
            if (res.length > 2) {
                return false;
            }
        }
    }

    if (res.length == 2 && res[0].join() === res[1].reverse().join()) {
        return true;
    } else if (res.length == 0  && similarNumberOfChars.findIndex(n => n > 1) > -1) {
        return true;
    }
    
    return false;
};
