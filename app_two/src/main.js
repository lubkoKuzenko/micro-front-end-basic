import faker from "faker";

const mount = el => {
  el.innerHTML = `You have ${faker.random.number()} in your cart`;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector(".cart");

  if (el) {
    mount(el);
  }
}

export { mount };
