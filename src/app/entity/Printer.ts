export class Printer {
    private targetElement: HTMLElement;
    private tag: HTMLElement;
    private myText: string;

    constructor(targetElement: HTMLElement, typeOfTag: string, myText: string) {
        this.targetElement = targetElement;
        this.tag = document.createElement(typeOfTag);
        this.myText = myText;
        this.targetElement.innerText = this.myText;
        this.targetElement.appendChild(this.tag);
    }
}
