// 배열 Create

const arr = [1, 2, 3, 4]

// 배열 Read

console.log(arr[3])

// 파이선과 동일한 슬라이싱
console.log(arr.slice(1, 3));

// 배열 Update

arr[0] = 100
console.log(arr)

// 배열 delete
arr.splice(0, 1); // 0번째 부터 1개 삭제
console.log(arr)

// Example - CRUD 방법은 여러가지 있으므로 검색 !
const nameList = ["짱구", "철수"];

// 1. 훈이추가
nameList.push("훈이");
console.log(nameList);

// 2. 철수 -> 유리
nameList[1] = "유리";
console.log(nameList);

// 3. 짱구 삭제
nameList.splice(0, 1);
console.log(nameList);