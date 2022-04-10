// 객체 - 기본적으로 key-value로 이뤄진 자료형

let userInfo = {
    email: "dummy@gmail.com",
    password: "1234"
}

// 객체 Read

console.log(userInfo.email);
console.log(userInfo["email"])

// 객체 update

userInfo.email = "updated";
console.log(userInfo.email);

// 객체 delete

console.log(userInfo, 'to');
delete userInfo.email;
console.log(userInfo);