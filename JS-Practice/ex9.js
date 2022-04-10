const productData = [{ title: "초코칩", weight: 300 }, { title: "라면", weight: 100 }, { title: "젤리", weight: 50 }];

const app = document.querySelector("#app")

let result = "";

for (let data of productData) {
    result += `<div class="item">상품명 : ${data.title}, 무게 : ${data.weight}g</div>`
}

app.innerHTML = result;