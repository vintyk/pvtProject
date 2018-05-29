export class Printer {
    private tag: HTMLElement;

    constructor(targetElement: HTMLElement, typeOfTag: string, myText: string) {
        this.tag = document.createElement(typeOfTag);
        this.tag.innerText = myText;
        targetElement.appendChild(this.tag);
    }
}
