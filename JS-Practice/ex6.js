// while

let i = 1;

// whlie(i <= 10) {
//     console.log("hi");
//     i++;
// };

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const arr = [5, 6, 7, 8]
for (let index in arr) {
    console.log(arr[index])
}

for (let item of arr) {
    console.log(item);
}

// 객체는 let of 문법 지원 X
const jsonArr = { email: "dummy", password: "a123" };

for (let key in jsonArr) {
    console.log(jsonArr[key])
}

// 제어 필요 시 break, continue 활용