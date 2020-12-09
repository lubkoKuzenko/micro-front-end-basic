import { mount as AppOneMount } from "appOne/AppOneIndex";
import { mount as AppTwoMount } from "appTwo/AppTwoIndex";

console.log("container");

AppOneMount(document.querySelector(".products"));
AppTwoMount(document.querySelector(".cart"));
