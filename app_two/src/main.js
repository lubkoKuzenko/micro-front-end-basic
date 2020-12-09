import faker from "faker";

document.querySelector(
  ".cart"
).innerHTML = `You have ${faker.random.number()} in your cart`;
