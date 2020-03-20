const range = function (start, end, step) {
    let list = [];
    if (step === undefined) {
        for (let i = start; i <= end; i ++) {
            list.push(i);
        }
    }
    else if (step <0) {
        for (let i = start; i >= end; i += step) {
            list.push(i);
        }
    }
    else {
        for (let i = start; i <= end; i += step) {
            list.push(i);
        }
    }
    
    return list;
}

const sum = function (list) {
    finalSum = 0;
    for (let i of list) {
        finalSum += i;
    }
    return finalSum;
}

console.log(range(1, 10));
console.log(range(5, 2, -01));
console.log(sum(range(1, 10)));