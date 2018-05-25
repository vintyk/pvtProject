class Fio {
    public  name: string;
    public  family: string;

    constructor(name: string, family: string){
        this.name = name;
        this.family = family;
    }
    public getFio(): string {
        return (this.name + " " + this.family);
    }
    static origin = new Fio("", "");
}

let myFio = new Fio("Ушаков", "Виталий");
// document.write(myFio.getFio());
document.body.textContent(myFio.getFio());