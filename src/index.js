
exports.min = function min (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }

    let minNumber = (a, b) => {
        return a < b ? a : b;
    };
    let min=array.reduce(minNumber);
    return min;
};

exports.max = function max (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }
    let maxNumber = (a, b) => {
            return a > b ? a : b;
        };
    let max = array.reduce(maxNumber);
    return max;
};


exports.avg = function avg (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }
        let  total = array.reduce((acc, c) => acc + c, 0);
        let res= total / array.length;
        return res;

};

