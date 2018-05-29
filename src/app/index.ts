// import "../styles/style.less_";
import "../styles/style.sass";

import "./entity/Fio.ts";
import "./entity/Greeter.ts";

import {Greeter} from "./entity/Greeter";

const el: HTMLElement = document.getElementById("content");
const greeter = new Greeter(el);
greeter.start();

import {Printer} from "./entity/Printer";

const el2: HTMLElement = document.getElementById("htmlEnterPoint");
const tag: string = "span";
const myText: string = "РАБОТА ПРИНТЕРА";

const printer = new Printer(el2, tag, myText);
const printer2 = new Printer(el2, tag, "Такие дела...");
