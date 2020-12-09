import faker from "faker";

document.querySelector(
  ".card"
).innerHTML = `You have ${faker.random.number()} in your card`;
