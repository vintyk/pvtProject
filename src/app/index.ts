// import "../styles/style.less_";
import "../styles/style.sass";

import "./Fio.ts";
import "./Greeter.ts";
// import {displayData} from "./module";
// displayData("Hello!!!");

import {Greeter} from "./Greeter";
const el: HTMLElement = document.getElementById("content");
const greeter = new Greeter(el);
greeter.start();
