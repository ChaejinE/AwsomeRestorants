function sum(target, start = 1) {
    let result = 0;
    for (let i = start; i <= target; i++) {
        result = result + i;
    }

    return result
}

console.log(sum(10));
console.log(sum(100));

const sum2 = function(target, start = 1) {
    let result = 0;
    for (let i = start; i <= target; i++) {
        result = result + i;
    }

    return result
}

console.log(sum2(10));
console.log(sum2(100));

const sum3 = (target, start = 1) => {
    let result = 0;
    for (let i = start; i <= target; i++) {
        result = result + i;
    }

    return result
}

console.log(sum3(10));
console.log(sum3(100));