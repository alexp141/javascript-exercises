const sumAll = function(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'ERROR'
    }
    if(n1 < 0 || n2 < 0) {
        return 'ERROR'
    }

    let large;
    let small;

    if (n1 > n2) {
        large = n1;
        small = n2;
    }
    else {
        large = n2;
        small = n1;
    }
    let sum = 0;
    for(let i = small; i <= large; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
