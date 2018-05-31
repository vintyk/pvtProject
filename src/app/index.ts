// import "../styles/style.less_";
import "../styles/style.sass";
import "./entity/Fio.ts";

import {Greeter} from "./entity/Greeter";
import {Printer} from "./entity/Printer";

const el: HTMLElement = document.getElementById("content");
const greeter = new Greeter(el);
greeter.start();

const el2: HTMLElement = document.getElementById("htmlEnterPoint");
const tag: string = "h2";
const myText: string = "РАБОТА ПРИНТЕРА...";

const printer = new Printer(el2, tag, myText);
// const printer2 = new Printer(el2, "h1", "Такие дела...");
