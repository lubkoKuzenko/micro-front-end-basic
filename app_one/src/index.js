import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `
    <div class='col-4'>
      <div class="p-3 border bg-light">
        <img src="http://placehold.it/320x200" style="width: 100%" />
        <p>${name}</span></p>
      </div>
    </div>
  `;
}

document.querySelector(".products").innerHTML = products;
