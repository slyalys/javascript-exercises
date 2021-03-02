const reverseString = function(a) {
   let newStr = a.split('');
   newStr.reverse();
   newStr = newStr.join('');
    return newStr;

}

module.exports = reverseString
