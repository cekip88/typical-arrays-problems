
exports.min = function min (array) {
    if(!Array.isArray(array) || !array || !array.length) {
        return 0
    }
    let ans = array[0];
    array.forEach(function (el) {
    if(el < ans) ans = el;
    });
    return ans;
};

exports.max = function max (array) {
    if(!Array.isArray(array) || !array || !array.length) {
        return 0
    }
    let ans = array[0];
    array.forEach(function (el) {
        if(el > ans) ans = el;
    });
    return ans;
};

exports.avg = function avg (array) {
    if(!Array.isArray(array) || !array || !array.length) {
        return 0
    }
    let ans = 0;
    array.forEach(function (el) {
        ans += el;
    });
    ans = ans / array.length;
    return ans;
};
