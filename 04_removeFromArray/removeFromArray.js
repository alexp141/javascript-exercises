const removeFromArray = function(arr, ...values) {
    for (const val of values) {
        let idx = arr.indexOf(val);
        if(idx > -1) {
            arr.splice(idx, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
