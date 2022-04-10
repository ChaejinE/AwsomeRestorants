const showBtn = document.getElementById("btn"); // id 가 btn인 요소를 선택

showBtn.addEventListener("click", eventHandler); // 선택 요소에 click 이벤트 리스너 등록 (event 종류, event 함수)

function eventHandler(event) {
    console.log(event); // event 함수에는 기본적으로 event 객체가 인자로 전달된다. 다양한 제어가 가능해진다.
    console.log(event.target);
    document.getElementById("text").innerHTML = "텍스트가 나타난다.";
}