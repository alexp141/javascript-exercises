const reverseString = function(string) {
    let stringArr = string.split("");
    let left = 0;
    let right = stringArr.length-1;
    let temp = '';

    while(left < right) {
        temp = stringArr[left]
        stringArr[left] = stringArr[right];
        stringArr[right] = temp;
        left++;
        right--;
    }

    return stringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
