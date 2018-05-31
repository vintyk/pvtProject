export class Greeter {
    private element: HTMLElement;
    private span: HTMLElement;
    private timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerText += "Текущее время: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    public start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    }

    public stop() {
        clearTimeout(this.timerToken);
    }
}
