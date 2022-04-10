console.log("1등")

setTimeout(function() { console.log("2등"); }, 2000); // ms
setTimeout(function() { console.log("3등"); }, 2000); // ms

// js 비동기 처리
/*
1. 콜백함수
2. promise 객체
3. async, await
*/

// promise
/*
1. 대기(pending) :  promise 객체를 새로 생성한 상태 대기
2. 이행(fulfiled) : resolve가 실행된 상태, 비동기 로직이 완료된 상태
3. 거부(rejected) : reject가 실행된 상태, 비동기 로직에서 에러난 경우
*/

const helloPromise = new Promise((resolve, reject) => {
    let isSuccess = true;

    if (!isSuccess) {
        reject(false);
        return;
    }

    console.log("1등")
    setTimeout(() => {
        resolve();
    }, 2000);
});

helloPromise
    .then((res) => {
        console.log("2등");
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 2000);
        });
    })
    .then((res) => { // 앞의 then을 하나의 Promise로 보고 동작된다.
        console.log("3등");
    })
    .catch((err) => {
        console.log(err);
    });

// async, await
/*
Promise 방식 기반
resolve로 넘어온 값이 await로 반환 되는 것이라고 보면된다. (then)
*/

async function asyncFunction() {
    console.log("1등");
    await second();
    await third();
}

function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2등");
            resolve(); // 이게 나와야 await가 끝난다.
        }, 2000);
    });
}

function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3등");
            resolve();
        }, 2000);
    });
}