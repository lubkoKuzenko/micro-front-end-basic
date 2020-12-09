import { mount } from "appOne/AppOneIndex";
import "appTwo/AppTwoIndex";

console.log("container");

mount(document.querySelector(".products"));
