console.log(1 == 1);
console.log(1 == "1");

let option1 = 10 > 1; // true
let option2 = 2 == 3; // false

console.log(option1 || option2); // true
console.log(option1 && option2); // false
console.log(!option1); // fasle

const height = 181;
const goodweight = (height - 100) * 0.9;


console.log(`당신의 키는 ${height}Cm 이며 적정 체중은 ${goodweight}kg 입니다.`)